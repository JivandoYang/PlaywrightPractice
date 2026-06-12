import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  API_BASE_URL: process.env.API_BASE_URL!,
  API_USERNAME: process.env.API_USERNAME!,
  API_PASSWORD: process.env.API_PASSWORD!,
};