import { UserDto } from "@/models/user";
import axios from "axios";

const UsersRepository = {
  async getUsers() {
    const response = await axios.get<UserDto[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  },
};

export default UsersRepository;
