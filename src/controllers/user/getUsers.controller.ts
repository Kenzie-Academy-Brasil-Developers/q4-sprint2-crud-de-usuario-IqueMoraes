import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const getUsersController = async (req: Request, res: Response) => {
  const user = await new UserRepository().getUsers();

  user.map((u: IUser) => delete u.password);
  return res.status(200).json(user)
}

export default getUsersController