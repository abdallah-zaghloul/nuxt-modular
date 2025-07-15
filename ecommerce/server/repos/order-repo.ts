export class OrderRepo {
  private orders: Order[] = [
    { id: 1, userId: 1, orderName: "Order 1 of user No: 1 abdallah" },
    { id: 2, userId: 1, orderName: "Order 2 of user No: 1 abdallah" },
    { id: 3, userId: 2, orderName: "Order 1 of user No: 2 zaghloul" },
    { id: 4, userId: 2, orderName: "Order 2 of user No: 2 zaghloul" },
  ];

  getUserOrders(userId: Order["userId"]): Order[] {
    return this.orders.filter((order) => order.userId === userId);
  }
}
