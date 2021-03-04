import axios from 'axios';
import { ITransport } from '../interface/Interface';

axios.defaults.baseURL = `http://localhost:8000/`;
axios.defaults.headers = { 'Content-Type': 'application/json' };

class AxiosTransportAdapter implements ITransport {
  get: <T>(url: string) => Promise<T> = (url: string) => {
    return axios.get(url);
  };
  delete: <T>(url: string) => Promise<T> = (url: string) => {
    return axios.delete(url);
  };
  post: <T, B>(url: string, body: T) => Promise<B> = <T>(
    url: string,
    body: T
  ) => {
    return axios.post(url, body);
  };
  patch: <T, B>(url: string, body: T) => Promise<B> = <T>(
    url: string,
    body: T
  ) => {
    return axios.patch(url, body);
  };
  put: <T>(url: string) => Promise<T> = (url: string) => {
    return axios.put(url);
  };
}

export const axiosTransportAdapter = new AxiosTransportAdapter();
