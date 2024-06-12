import { UserCreate } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";
 
export class UserUseCase {
    private userRepository: UserRepositoryPrisma;
    constructor() {
        this.userRepository = new UserRepositoryPrisma();
    }

    async craete({name, email}: UserCreate): Promise<User> {

    }
}