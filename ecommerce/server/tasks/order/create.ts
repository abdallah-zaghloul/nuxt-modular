export default defineTask({
  meta: {
    name: "order:create",
    description: "Create a new order",
  },
  async run({ payload }) {
    await di.orderService.create(payload as Omit<Order, "id">);
    return { result: "Order created successfully" };
  },
});
