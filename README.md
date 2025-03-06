
# Secure Cloud Hosting 

📌 Overview
This project provides a secure and scalable web hosting solution on AWS using best practices for high availability, security, and performance.

🔹 Key Features

- VPC (Virtual Private Cloud) with public and private subnets. 
- Auto Scaling Group for automatic scaling.
- Security Groups for network protection.
- Public Subnets for load balancer and NAT gateway.
- Private Subnets for secure application servers.

# Architecture

![Image](https://github.com/user-attachments/assets/f09d8ded-cd47-49c0-b962-545fcd8f99b7)

# Prerequisites

- AWS Account

# Steps

**1. Set Up AWS Environment**

- Sign in to your AWS account.
- Ensure you have the necessary permissions to create VPCs, subnets, security groups, and EC2 instances.

**2. Create a VPC**

- Create a VPC with a CIDR block (e.g., 10.0.0.0/16).
- Create two public and two private subnets in different Availability Zones for high availability.

**3. Set Up Networking**

- Create an Internet Gateway and attach it to the VPC.
- Create a Route Table for public subnets and associate them with the Internet Gateway.
- Create a NAT Gateway in a public subnet to allow private subnets to access the internet securely.

**4. Configure Security Groups**

- Create a security group for the load balancer (allow HTTP/HTTPS traffic).
- Create a security group for EC2 instances (allow internal traffic from the load balancer).

**5. Set Up Load Balancer and Auto Scaling**

- Deploy an Application Load Balancer (ALB) in the public subnets.
- Set up an Auto Scaling Group (ASG) with EC2 instances in private subnets.
- Attach the ASG to the ALB’s target group for traffic distribution.

**6. Deploy Application**

- SSH into the EC2 instances and install necessary dependencies.
- Deploy your application in the private instances.
- Verify that the application is accessible through the ALB.
- Run the following script in EC2 instances to install the code and dependencies.

## Deployment Script

```bash
#!/bin/bash

# Update package lists
echo "Updating package lists..."
sudo apt update -y

# Clone the Git repository
echo "Cloning repository..."
git clone https://github.com/krushikesh18/Secure-Cloud-Hosting.git
cd Secure-Cloud-Hosting || exit

# Install dependencies and build the project
echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

# Check and restart Apache
echo "Checking Apache status..."
systemctl status apache2 || echo "Apache2 service not found!"

echo "Restarting Apache..."
sudo systemctl restart apache2
sudo systemctl enable apache2

# Deploy the build files
DEPLOY_PATH="/var/www/html"
echo "Deploying files to $DEPLOY_PATH..."

sudo cp -r dist/* "$DEPLOY_PATH/"
sudo chown -R www-data:www-data "$DEPLOY_PATH/"
sudo chmod -R 755 "$DEPLOY_PATH/"

# Restart Apache to apply changes
echo "Restarting Apache..."
sudo systemctl restart apache2
sudo systemctl enable apache2

echo "Deployment completed successfully!"

