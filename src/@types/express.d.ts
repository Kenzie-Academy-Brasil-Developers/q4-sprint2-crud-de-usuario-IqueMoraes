import * as express from "express";
import { IUser } from "../repositories";
// import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      validated: IUser;
      user: IUser;
      uuid: string;
      decoded: IDecoded;
      token: string;
      userToUpdate: IUser;
    }
  }
}

export interface IUserDecoded{
  email: string;
  isAdm: boolean;
}

export interface IDecoded extends IUserDecoded{
  iat: number;
  exp: number;
}