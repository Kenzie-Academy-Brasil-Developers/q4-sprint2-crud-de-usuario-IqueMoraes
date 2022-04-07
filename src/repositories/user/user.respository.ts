import { Repository, getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserData, IUserRepo } from "./interfaces";

class UserRepository implements IUserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = getRepository(User);
  }

  saveUser = async (user: IUser) => await this.ormRepo.save(user);
  getUsers = async () => await this.ormRepo.find();
  getUserByData = async (userData: IUserData) =>{
  return await this.ormRepo.findOne({ where: userData });
  }

  updateUser = async (data: Partial<IUser>, uuid: string) =>
    await this.ormRepo.update({ uuid: uuid }, data);

  deleteUser = async (email: IUser["email"]) =>
    await this.ormRepo.delete({ email });
}

export { UserRepository, IUser };
