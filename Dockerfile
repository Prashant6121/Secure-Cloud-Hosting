# Use node to build the frontend
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the project (Vite output is usually in "dist")
RUN npm run build

# Use nginx to serve the built files
FROM nginx:alpine AS runner

# Copy the built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
