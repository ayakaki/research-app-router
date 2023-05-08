import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:3000';

export const myAxiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});
