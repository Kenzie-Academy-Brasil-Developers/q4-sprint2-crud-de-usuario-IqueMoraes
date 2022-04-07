import { UpdateResult } from "typeorm";

interface IUser {
  uuid: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
}

interface IUserData {
  email?: string;
  uuid?: string;
}

interface IUserRepo {
  saveUser: (user: IUser) => Promise<IUser>;
  getUsers: () => Promise<IUser[]>;
  // getUserByUuid: (uuid: string) => Promise<IUser>;
  // getUserByEmail: (email: string) => Promise<IUser>;
  getUserByData: (userData: IUserData) => Promise<IUser>;
  updateUser: (data: Partial<IUser>, id: string) => Promise<UpdateResult>;
  deleteUser: (email: IUser["email"]) => {};
}

export { IUser, IUserRepo, IUserData };
