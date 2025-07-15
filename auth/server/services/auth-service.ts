export class AuthService {
  constructor(private userRepo: UserRepo) {}

  getUser(id: User["id"]): User {
    const user = this.userRepo.find(id);
    if (!user)
      throw createError({ statusCode: 404, statusMessage: "User not found" });
    return user;
  }
}
