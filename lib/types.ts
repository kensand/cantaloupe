export type Nil = undefined | null | void;
export type NonEmpty<T> = [T, ...T[]];
export const a: NonEmpty<string> = ["abc"];
