export interface Launch {
  id: string;
  name: string;
  date: string;
  success?: boolean;
  details: string;
  links: {
    patch: {
      small: string;
    };
    webcast?: string;
  };
}

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  height: string;
  diameter: string;
  mass: string;
  payload: string;
  imageUrl: string;
}