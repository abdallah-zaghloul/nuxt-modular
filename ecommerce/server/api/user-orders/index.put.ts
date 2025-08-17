export default defineEventHandler({
  onRequest: authUserReq,
  handler: async (event) => {
    const body = await readBody(event);
    const updateData = {
      name: body.name,
      id: Number(body.id),
      userId: event.context.userId,
    };
    return di.orderService.updateUserOrder(updateData);
  },
});
