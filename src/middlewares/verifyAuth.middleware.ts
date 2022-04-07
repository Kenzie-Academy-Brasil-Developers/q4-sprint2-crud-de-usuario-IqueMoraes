import { NextFunction, Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken';
import { IDecoded } from "../@types/express";

const verifyAuth = (req:Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    jsonwebtoken.verify(token, process.env.SECRET_KEY_JWT, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Missing authorization headers" });
    }

    req.decoded = decoded as IDecoded;
    return next();
    })
  }
  catch (err) { res.status(400).json({ error: err })};

};

export default verifyAuth;