import { Request, Response } from "express";
import { UserRepository } from "../../repositories";


const loginUserController = (req: Request, res: Response) => {
  return res.status(200).json({ Token: req.token });
}

export default loginUserController;
