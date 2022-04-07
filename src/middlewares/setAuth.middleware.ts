import { compareSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";
import dotenv from "dotenv";

dotenv.config();

const setAuthToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await new UserRepository().getUserByData({email: req.validated.email});
  
    if (!user) {
      return res.status(400).json({ message: "Wrong email/password" });
    }

    if (!compareSync((req.validated as User).password, user.password)) {
      return res.status(400).json({ message: "Wrong email/password" });
    }
    const userDatas = { email: user.email, isAdm: user.isAdm };

    const token: string = sign(userDatas, process.env.SECRET_KEY_JWT, {
      expiresIn: process.env.EXPIRES_IN,
    });

    req.token = token;

    return next();
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export default setAuthToken;
