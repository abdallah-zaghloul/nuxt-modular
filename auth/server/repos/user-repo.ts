export class UserRepo {
  private users: User[] = [
    { id: 1, name: "abdallah" },
    { id: 2, name: "zaghloul" },
  ];

  find(id: User["id"]): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
