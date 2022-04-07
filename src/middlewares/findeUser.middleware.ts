import { NextFunction, Request, Response } from "express";
import { IUser, UserRepository } from "../repositories";


const findOneUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const user = await new UserRepository().getUserByData({email: req.decoded.email});
    if (req.method === 'PATCH' ) {
      const uuid = req.params.uuid as string;
      const userToUpdate = await new UserRepository().getUserByData({uuid: uuid});
      req.userToUpdate = userToUpdate;
     
      if (! userToUpdate ) {
        return res.status(400).json({ message: "This users doesn't exists" });
      }
    }
    
    if (! user ) {
      return res.status(400).json({ message: "This token's user doesn't exists" });
    }
    req.user = user;
    return next()
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

export default findOneUser;
