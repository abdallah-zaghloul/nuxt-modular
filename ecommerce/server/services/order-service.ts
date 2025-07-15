export class OrderService {
  constructor(private orderRepo: OrderRepo) {}

  getUserOrders(userId: Order["userId"]) {
    return this.orderRepo.getUserOrders(userId);
  }
}
