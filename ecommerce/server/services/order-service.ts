export class OrderService {
  constructor(private orderRepo: OrderRepo) {}

  getUserOrders(userId: Order["userId"]) {
    return this.orderRepo.getUserOrders(userId);
  }

  showUserOrder(data: Pick<Order, "id" | "userId">) {
    return this.orderRepo.showUserOrder(data).then((order?) => {
      if (!order) {
        throw createError({
          statusCode: 404,
          statusMessage: "Order not found",
        });
      }
      return order;
    });
  }

  create(data: Omit<Order, "id">) {
    return this.orderRepo.create(data);
  }

  updateUserOrder(data: Pick<Order, "id" | "name" | "userId">) {
    return this.orderRepo.updateUserOrder(data);
  }

  deleteUserOrder(data: Pick<Order, "id" | "userId">) {
    return this.orderRepo.deleteUserOrder(data);
  }
}
