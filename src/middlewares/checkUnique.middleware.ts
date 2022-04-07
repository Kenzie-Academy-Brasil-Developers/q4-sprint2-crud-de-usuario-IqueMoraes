import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories";


const checkUniqueUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.validated.email);
  const user = await new UserRepository().getUserByData({email: req.validated.email});
  console.log(user);

  if (user) {
    return res.status(400).json({ message: "This email is already exists."});
  }

  return next()
}

export default checkUniqueUser;