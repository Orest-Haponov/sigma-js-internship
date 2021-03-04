import { ITransport } from './../interface/Interface';

const baseUrl = 'http://localhost:8000/';
const baseHeader = { 'Content-Type': 'application/json' };

class FetchTransportAdapter implements ITransport {
  get: <T>(url: string) => Promise<T> = (url: string) => {
    return fetch(baseUrl + url, {
      method: 'GET',
      headers: baseHeader
      // TODO: Extract to function and reuse in adapter
    }).then(res => res.json());
  };
  delete: (url: string) => Promise<any> = (url: string) => {
    return fetch(baseUrl + url, {
      method: 'DELETE',
      headers: baseHeader
    });
  };
  post: <T>(url: string, body: T) => Promise<any> = <T>(
    url: string,
    body: T
  ) => {
    return fetch(baseUrl + url, {
      method: 'POST',
      headers: baseHeader,
      body: JSON.stringify(body)
    });
  };
  patch: <T>(url: string, body: T) => Promise<any> = <T>(
    url: string,
    body: T
  ) => {
    return fetch(baseUrl + url, {
      method: 'PATCH',
      headers: baseHeader,
      body: JSON.stringify(body)
    });
  };
  put: (url: string) => Promise<any> = (url: string) => {
    return fetch(url);
  };
}

export const fetchTransportAdapter = new FetchTransportAdapter();
