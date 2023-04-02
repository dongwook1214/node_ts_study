import { UserStorageMemory } from "./UserStorage";
import { LoginResponse } from "./LoginResponse";
class User {
  id: string;
  password: string;

  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
  }
  login(): LoginResponse {
    let userStorage: UserStorageMemory = new UserStorageMemory();
    if (userStorage.isValid(new User(this.id, this.password))) {
      const loginResponse: LoginResponse = { succeed: true, message: "굳" };
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
