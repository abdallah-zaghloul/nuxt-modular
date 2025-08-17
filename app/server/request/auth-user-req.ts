export default defineRequestMiddleware(async (event) => {
  const userId = Number(getHeader(event, "userId"));
  const user = await mediator("getUser", userId);
  event.context.userId = user!.id as number;
});
