import React from 'react';

export interface INewProject {
  name: string;
}

export interface IProject {
  id: number;
  name: string;
}

export interface IEditProject {
  name: string;
}

export interface IMainProjectInfo {
  projectName: string;
  projectId: number;
}

export interface IButton {
  label: string;
  btnAction: <T>(arg: T) => void;
  btnClass?: string;
}

export interface IInput {
  label: string;
  value: string;
  valueChange: (value: string) => void;
  hideError: () => void;
}

export interface IModal {
  isOpen: boolean;
  children?: React.ReactElement;
}

export interface ITransport {
  get: <T>(url: string) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
  post: <T, B>(url: string, body: T) => Promise<B>;
  patch: <T, B>(url: string, body: T) => Promise<B>;
  put: <T>(url: string) => Promise<T>;
}

export interface IApiService {
  getRequest: <T>(url: string) => Promise<T>;
  deleteRequest: <T>(url: string) => Promise<T>;
  postRequest: <T, B>(url: string, body: T) => Promise<B>;
  patchRequest: <T, B>(url: string, body: T) => Promise<B>;
  putRequest: <T, B>(url: string, body: T) => Promise<B>;
}

export enum dataType {
  projects = 'projects'
}
