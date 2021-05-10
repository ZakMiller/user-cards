import axios from "axios";
import UsersRepository from "@/repositories/users";
import { User } from "@/models/user";
const UsersService = {
  async getUsers(): Promise<User[]> {
    return UsersRepository.getUsers();
  },
};

export default UsersService;
