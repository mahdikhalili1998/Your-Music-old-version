import { Dispatch, SetStateAction } from "react";

export interface IPropsBtLight {
  nextLevel: boolean;
}

export interface IProfileDetail {
  userData: any;
}
export interface IUserId extends IProfileDetail {
  _id: string;
}

export type IUser_Id = {
  url: string;
};
