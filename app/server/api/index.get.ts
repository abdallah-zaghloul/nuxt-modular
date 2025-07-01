export default defineEventHandler({
  // onBeforeResponse: [],
  // onRequest: [],
  handler: async (event) => {
    const { helloService, helloRepo } = $container;
    const greet = $mediator("greet");
    console.log({ helloService, helloRepo, greet, event });
    return helloService.greet();
  },
});
