export default defineEventHandler((event) => {
  const userId = Number(getRouterParam(event, "userId"));
  const user = mediator("getUser", userId);
  return di.orderService.getUserOrders(user.id);
});
