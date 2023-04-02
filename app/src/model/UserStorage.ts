import { User } from "./User";

class UserStorageMemory {
  private users: User[] = [
    new User("1234", "1234"),
    new User("12345", "12345"),
  ];
  getUsers(): User[] {
    return this.users;
  }
  isValid(user: User): boolean {
    let isInclude: boolean = this.users.some(
      (value) => value.id === user.id && value.password === user.password
    );
    if (isInclude) {
      return true;
    }
    return false;
  }
}

export { UserStorageMemory };
