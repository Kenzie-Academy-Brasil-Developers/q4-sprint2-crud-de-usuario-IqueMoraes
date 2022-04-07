import { Request, Response } from "express";
import { UsingJoinColumnOnlyOnOneSideAllowedError } from "typeorm";
import { IUser, UserRepository } from "../../repositories";

const deleteUserController = async (req: Request, res: Response) => {
  if (req.decoded.email === req.user.email) {
    const deletedUser = await new UserRepository().deleteUser(req.decoded.email)

    return res.status(200).json({ message: "User deleted with success."});
  }
  else if (! req.decoded.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" })
  }

  const deletedUser = await new UserRepository().deleteUser(req.user.email);

  return res.status(200).json({ message: "User deleted with success." });

}

export default deleteUserController;