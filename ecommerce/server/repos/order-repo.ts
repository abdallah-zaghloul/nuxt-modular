export class OrderRepo {
  getUserOrders(userId: Order["userId"]): Promise<Order[]> {
    return db.order.findMany({
      where: {
        userId: userId,
      },
    });
  }

  showUserOrder(data: Pick<Order, "id" | "userId">): Promise<Order | null> {
    return db.order.findUnique({
      where: {
        id: data.id,
        userId: data.userId,
      },
    });
  }

  create(data: Omit<Order, "id">): Promise<Order> {
    return db.order.create({
      data: {
        userId: data.userId,
        name: data.name,
      },
    });
  }

  updateUserOrder(data: Pick<Order, "id" | "name" | "userId">): Promise<Order> {
    return db.order.update({
      where: {
        id: data.id,
        userId: data.userId,
      },
      data: {
        name: data.name,
      },
    });
  }

  deleteUserOrder(data: Pick<Order, "id" | "userId">): Promise<boolean> {
    return db.order
      .delete({
        where: {
          id: data.id,
          userId: data.userId,
        },
      })
      .then(() => true)
      .catch(() => false);
  }
}
