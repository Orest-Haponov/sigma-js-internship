// import { fetchTransportAdapter } from './fetch-transport-adapter';
import { axiosTransportAdapter } from './axiosTransportAdapter';
import { IApiService } from '../interface/Interface';
import { ITransport } from '../interface/Interface';

export class ApiService implements IApiService {
  getRequest = <T>(url: string): Promise<T> => {
    return this.transport.get(`${url}`);
  };
  deleteRequest = <T>(url: string): Promise<T> => {
    return this.transport.delete(`${url}`);
  };
  postRequest = <T, B>(url: string, body: T): Promise<B> => {
    return this.transport.post(`${url}`, body);
  };
  patchRequest = <T, B>(url: string, body: T): Promise<B> => {
    return this.transport.patch(`${url}`, body);
  };
  putRequest = <T>(url: string): Promise<T> => {
    return this.transport.put(`${url}`);
  };
  constructor(private transport: ITransport) {}
}

export const apiService = new ApiService(axiosTransportAdapter);
