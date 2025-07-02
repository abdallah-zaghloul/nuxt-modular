/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineEventHandler({
  // onBeforeResponse: [],
  // onRequest: [],
  handler: async (event) => {
    return {
      message: di.helloService.greet(),
      diffMessage: di("helloService", { count: 1 }).greet(),
    };
  },
});
