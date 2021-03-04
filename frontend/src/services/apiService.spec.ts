import { ApiService } from './apiService';
const axios = require('axios');

// GET REQUEST

describe('getRequest', () => {
  it('should call get method of transport with correct url', async () => {
    // GIVEN
    const url = 'url';
    const spy = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve());
    const apiServise = new ApiService(axios);
    // WHEN
    await apiServise.getRequest(url);
    // THEN
    expect(spy).toHaveBeenCalledWith(url);
  });

  it('should return Promise.resolve() on successful get response', () => {
    // GIVEN
    const url = 'url';
    const responseData = {};
    jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve(responseData));
    const apiService = new ApiService(axios);
    // WHEN/THEN
    expect(apiService.getRequest(url)).resolves.toMatchObject(responseData);
  });

  it('should return Promise.reject() on failed get response', () => {
    // GIVEN
    const error = 'Error';
    const url = 'url';
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject(error));
    const apiService = new ApiService(axios);
    // WHEN
    expect(apiService.getRequest(url)).rejects.toEqual(error);
  });
});

// // DELETE REQUEST

describe('deleteRequest', () => {
  it('should call delete method of transport with correct url', async () => {
    //GIVEN
    const url = 'url';
    const spy = jest
      .spyOn(axios, 'delete')
      .mockImplementation(() => Promise.resolve());
    const apiService = new ApiService(axios);
    //WHEN
    await apiService.deleteRequest(url);
    //THEN
    expect(spy).toHaveBeenCalledWith(url);
  });

  it('should return Promise.resolve() on sucsess delete response', () => {
    //GIVEN
    const url = 'url';
    const responseData = 'Data';
    jest
      .spyOn(axios, 'delete')
      .mockImplementation(() => Promise.resolve(responseData));
    const apiService = new ApiService(axios);
    // WHEN/THEN
    expect(apiService.deleteRequest(url)).resolves.toEqual(responseData);
  });

  it('should return Promise.regect() on fail delete response', () => {
    //GIVEN
    const url = 'url';
    const error = 'error';
    jest.spyOn(axios, 'delete').mockImplementation(() => Promise.reject(error));
    const apiService = new ApiService(axios);
    // WHEN/THEN
    expect(apiService.deleteRequest(url)).rejects.toEqual(error);
  });
});

// // POST REQUEST

describe('postRequest', () => {
  it('should call post method of transport with correct url and post data', async () => {
    //GIVEN
    const url = 'url';
    const newProject = {
      name: 'Project'
    };
    const spy = jest
      .spyOn(axios, 'post')
      .mockImplementation(() => Promise.resolve());
    const apiService = new ApiService(axios);
    //WHEN
    await apiService.postRequest(url, newProject);
    //THEN
    expect(spy).toHaveBeenCalledWith(url, newProject);
  });

  it('should return Promise.resolve() on sucsess post response', () => {
    //GIVEN
    const url = 'url';
    const body = {
      name: 'Project'
    };
    const responseData = 'Data';
    jest
      .spyOn(axios, 'post')
      .mockImplementation(() => Promise.resolve(responseData));
    const apiService = new ApiService(axios);
    // WHEN/THEN
    expect(apiService.postRequest(url, body)).resolves.toEqual(responseData);
  });

  it('should return Promise.regect() on fail post response', () => {
    //GIVEN
    const url = 'url';
    const body = {
      name: 'Project'
    };
    const error = 'error';
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.reject(error));
    const apiService = new ApiService(axios);
    // WHEN/THEN
    expect(apiService.postRequest(url, body)).rejects.toEqual(error);
  });
});

// // PATCH REQUEST

describe('patchRequest', () => {
  it('should call patch method of transport with correct url and patch data', async () => {
    //GIVEN
    const url = 'url';
    const editProject = {
      name: 'new Name'
    };
    const spy = jest
      .spyOn(axios, 'patch')
      .mockImplementation(() => Promise.resolve());
    const apiService = new ApiService(axios);
    //WHEN
    await apiService.patchRequest(url, editProject);
    //THEN
    expect(spy).toHaveBeenCalledWith(url, editProject);
  });

  it('should return Promise.resolve() on sucsess patch response', () => {
    //GIVEN
    const url = 'url';
    const body = {
      name: 'new Name'
    };
    const responseData = 'Data';
    jest
      .spyOn(axios, 'patch')
      .mockImplementation(() => Promise.resolve(responseData));
    const apiService = new ApiService(axios);
    // WHEN/THEN
    expect(apiService.patchRequest(url, body)).resolves.toEqual(responseData);
  });

  it('should return Promise.regect() on fail patch response', () => {
    //GIVEN
    const url = 'url';
    const body = {
      name: 'new Name'
    };
    const error = 'Error';
    jest.spyOn(axios, 'patch').mockImplementation(() => Promise.reject(error));
    const apiService = new ApiService(axios);
    // WHEN/THEN
    expect(apiService.patchRequest(url, body)).rejects.toEqual(error);
  });
});
