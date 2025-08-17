export default defineEventHandler({
  onRequest: authUserReq,
  handler: async (event) => {
    const data = {
      id: Number(getRouterParam(event, "id")),
      userId: event.context.userId,
    };
    return di.orderService.showUserOrder(data);
  },
});
