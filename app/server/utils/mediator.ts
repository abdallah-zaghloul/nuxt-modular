/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
function bind<
  T extends Constructor<any> | InstanceType<any>,
  M extends MethodOf<T>,
>(target: T, method: M) {
  //@ts-ignore
  return target[method].bind(target) as T[M];
}

const mediator = {
  // Example of binding a method from a service to the mediator
  // action : bind(service, "methodName"),
  greet: bind($container.helloService, "greet"),
};

export function $mediator<Action extends keyof typeof mediator>(
  action: Action,
  ...params: Parameters<(typeof mediator)[Action]>
): ReturnType<(typeof mediator)[Action]> {
  // @ts-expect-error
  return mediator[action](...params);
}
