import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const getOneUserController = async (req: Request, res: Response) => {
  const user = req.user as IUser;
  delete user.password;
  return res.status(200).json(user);
}

export default getOneUserController;