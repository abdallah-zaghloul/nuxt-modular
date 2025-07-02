/* eslint-disable @typescript-eslint/no-explicit-any */
export type Constructor<T = any> = new (...args: any[]) => T;

export type Dependencies = { [key: string]: Constructor<any> };
export type Singleton<D extends Dependencies> = {
  [K in keyof D as Uncapitalize<K & string>]: InstanceType<D[K]>;
};

export type Method = (...args: any[]) => any;
export type MethodOf<T extends Constructor<any> | InstanceType<any> | object> =
  {
    [K in keyof T]: T[K] extends Method ? K : never;
  }[keyof T];

export type Container<D extends Dependencies> = {
  <K extends Uncapitalize<keyof D & string>>(
    name: K,
    overrides?: Record<string, unknown>
  ): InstanceType<D[Capitalize<K>]>;
} & Singleton<D>;
