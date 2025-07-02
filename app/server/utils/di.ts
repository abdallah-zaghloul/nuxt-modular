import type { AwilixContainer } from "awilix";
import { asClass, createContainer } from "awilix";

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function unCapitalize(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function diContainer<D extends Dependencies>(dependencies: D): Container<D> {
  const container: AwilixContainer<D> = createContainer({
    injectionMode: "CLASSIC",
    strict: true,
  });

  for (const name in dependencies) {
    if (dependencies[name])
      container.register(
        unCapitalize(name),
        asClass(dependencies[name]).singleton()
      );
  }

  const di = (<K extends keyof D & string>(
    name: K,
    overrides: Record<string, unknown> = {}
  ): InstanceType<D[K]> => {
    const className = capitalize(name);
    if (!dependencies[className])
      throw new Error(`Dependency "${name}" is not registered.`);

    return container.build(
      asClass(dependencies[className]).inject(() => overrides)
    );
  }) as Container<D>;

  Object.assign(di, container.cradle);
  return di;
}

export const di = diContainer({
  HelloService,
  HelloRepo,
});
