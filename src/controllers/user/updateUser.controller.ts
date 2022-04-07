import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";
import { QueryFailedError } from "typeorm";

const updateUserController = async (req: Request, res: Response) => {
  try { if (! req.decoded.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" })
  }
  await new UserRepository().updateUser(req.validated, req.user.uuid);
  const user = await new UserRepository().getUserByData({uuid: req.params.uuid});
  
  delete user.password;
  return res.status(200).json(user);
} catch (err) {
  if (err instanceof(QueryFailedError)) {
    return res.status(409).json({ error: err.driverError.detail });
  }
}


}

export default updateUserController;
