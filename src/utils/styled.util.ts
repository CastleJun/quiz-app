type AddPrefixByDollarSign<T> = T extends string ? `$${T}` : T;

export type AddDollarSignToKey<Props extends { [key in keyof Props]: Props[key] }> = {
  [Key in keyof Props as AddPrefixByDollarSign<Key>]: Props[Key];
};

export type ToStyledProps<Props extends { [key in keyof Props]: Props[key] }> = AddDollarSignToKey<Props>;

export const toStyledProps = <T extends { [key in keyof T]: T[key] }>(props: T): AddDollarSignToKey<T> => {
  return Object.keys(props).reduce((acc: AddDollarSignToKey<T>, cur) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    acc[`$${cur}`] = props[cur];
    return acc;
  }, {} as AddDollarSignToKey<T>);
};
