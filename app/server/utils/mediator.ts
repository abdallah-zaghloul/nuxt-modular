/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
function bind<
  T extends Constructor<any> | InstanceType<any>,
  M extends MethodOf<T>,
>(target: T, method: M) {
  //@ts-ignore
  return target[method].bind(target) as T[M];
}

const dispatcher = {
  // Example of binding a method from a service to the mediator
  // action : bind(service, "methodName"),
  greet: bind(di.helloService, "greet"),
};

export function mediator<Action extends keyof typeof dispatcher>(
  action: Action,
  ...params: Parameters<(typeof dispatcher)[Action]>
): ReturnType<(typeof dispatcher)[Action]> {
  // @ts-expect-error
  return dispatcher[action](...params);
}
