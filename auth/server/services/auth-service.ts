export class AuthService {
  constructor(private userRepo: UserRepo) {}

  getUser(id: User["id"]): Promise<User | null> {
    return this.userRepo.show(id).catch(() => {
      throw createError({ statusCode: 404, statusMessage: "User not found" });
    });
  }
}
