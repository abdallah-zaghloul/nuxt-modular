export class UserRepo {
  create(data: Omit<User, "id">): Promise<User> {
    return db.user.create({ data });
  }

  show(id: User["id"]): Promise<User | null> {
    return db.user.findUnique({ where: { id } });
  }

  update(id: User["id"], data: Partial<User>): Promise<User> {
    return db.user.update({ where: { id }, data });
  }

  delete(id: User["id"]): Promise<boolean> {
    return db.user
      .delete({ where: { id } })
      .then(() => true)
      .catch(() => false);
  }
}
