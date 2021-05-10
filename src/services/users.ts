import { User } from "./../models/user";
import axios from "axios";
import UsersRepository from "@/repositories/users";
import { UserDto } from "@/models/user";
import Store from "@/store";
const UsersService = {
  async getUsers() {
    const userDtos = await UsersRepository.getUsers();
    const users = userDtos.map((dto) => new User(dto));
    Store.set("users", users);
  },
};

export default UsersService;
