type typeFilterString<T extends Record<any, any>> = {
  [Key in keyof T as `on${Capitalize<Key & string>}`]: T[Key];
};

export const emitsBind = <T extends { [key: string]: Function }>(
  emitsObject: T,
  emits: any
): typeFilterString<T> => {
  return Object.keys(emitsObject).reduce(
    (obj: { [key: string]: any }, key: string) => {
      const name = "on" + key.slice(0, 1).toUpperCase() + key.slice(1);
      obj[name] = (...args: any[]) => emits(key, ...args);
      return obj;
    },
    {}
  ) as typeFilterString<T>;
};
