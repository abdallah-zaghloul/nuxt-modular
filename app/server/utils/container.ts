import type { ContainerOptions } from "awilix";
import { asClass, createContainer } from "awilix";

// Utility function to create and resolve a singleton container
function singletonContainer<D extends Dependencies>({
  dependencies,
  containerOptions = {
    injectionMode: "CLASSIC",
    strict: true,
  },
}: {
  dependencies: D;
  containerOptions?: ContainerOptions;
}): Singleton<D> {
  // Create the Awilix container
  const container = createContainer<D>(containerOptions);

  // Register each dependency as a singleton
  for (const name in dependencies) {
    if (dependencies[name])
      container.register(name, asClass(dependencies[name]).singleton());
  }
  // Return the instances (resolved during destructure)
  return container.cradle as Singleton<D>;
}

export const $container = singletonContainer({
  dependencies: {
    helloService: HelloService,
    helloRepo: HelloRepo,
  },
});
