import React from "react";
import { AxiosResponse } from "axios";

export interface RootStackParamList {
  Login: undefined;
  Home: undefined;
  [key: string]: undefined | object;
}

export interface IResponse {
  success: boolean;
  message: string;
  data: {
    [key: string]: any;
  };
}

export interface IAuthProvider {
  children: React.ReactNode;
}

export interface IAuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  backendServiceProvider: (func: IBackendInteraction) => Promise<IResponse>;
  loginServiceProvider: (
    func: ILoginFunction,
    username: string,
    password: string
  ) => Promise<IResponse>;
}
export interface ILoginFunction {
  (username: string, password: string): Promise<AxiosResponse>;
}
export interface IBackendInteraction {
  (): Promise<Response>;
}
