export default defineEventHandler({
  onRequest: authUserReq,
  handler: async (event) => {
    const userId = event.context.userId;
    return di.orderService.getUserOrders(userId);
  },
});
