export default defineEventHandler({
  onRequest: authUserReq,
  handler: async (event) => {
    const orderData = await readBody(event);
    orderData.userId = event.context.userId;
    return runTask("order:create", { payload: orderData });
  },
});
