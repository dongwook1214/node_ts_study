import { UserStorageMemory } from "./UserStorage";
import { LoginResponse } from "./LoginResponse";
class User {
  id: string;
  password: string;
  name?: string;

  constructor(id: string, password: string, name?: string) {
    this.id = id;
    this.password = password;
    this.name = name;
  }
  login(): LoginResponse {
    let userStorage: UserStorageMemory = new UserStorageMemory();
    if (userStorage.isValid(this)) {
      const loginResponse: LoginResponse = {
        succeed: true,
        message: `${this.name ?? "익명님"} 굳`,
      };
      return loginResponse;
    } else {
      const loginResponse: LoginResponse = {
        succeed: false,
        message: "아이디 패스워드 오류!",
      };
      return loginResponse;
    }
  }
}

export { User };
