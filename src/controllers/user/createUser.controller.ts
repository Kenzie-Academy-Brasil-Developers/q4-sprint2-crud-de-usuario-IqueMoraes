import { Request, Response } from "express";
import { UserRepository } from "../../repositories";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await new UserRepository().saveUser(req.validated);
    delete user.password;
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

export default createUserController;
