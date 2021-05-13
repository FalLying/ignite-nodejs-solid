import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    if (!user.admin) {
      throw new Error("You must be an administrator user to list all users.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
