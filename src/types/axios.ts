import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IAxios extends AxiosRequestConfig {
  phoneNumber: string;
}

export interface IAxiosResponse extends AxiosResponse {
  response: any;
}
