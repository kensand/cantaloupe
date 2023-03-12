import { Nil, NonEmpty } from "./types";
import { negate } from "./functions";

export const isNil = <T>(t: T | Nil): t is Nil => t === undefined || t === null;
export const isNotNil = negate(isNil);

export const isEmpty = <T>(t: T[]): t is never[] => t.length == 0;
export const isNotEmpty = <T>(t: T[]): t is NonEmpty<T> => negate(isEmpty)(t);

export const isEnum =
  <T extends ArrayLike<unknown> | { [s: string]: unknown } | {}>(e: T) =>
  (token: any): token is T[keyof T] =>
    Object.values(e).includes(token as T[keyof T]);
export const isNotEnum =
  <T extends ArrayLike<unknown> | { [s: string]: unknown } | {}>(e: T) =>
  (token: any): token is never =>
    negate(isEnum(e))(token);

export const requireNotNil: <T, U = T | null | undefined>(
  errorMsg?: string
) => (arg0: U) => T =
  <T, U = T | null | undefined>(errorMsg?: string) =>
  (argN0: U) => {
    if (isNil(argN0)) {
      throw new Error(
        errorMsg ?? `Variable required to be non-Nil, but was ${argN0}`
      );
    } else {
      return argN0 as unknown as T;
    }
  };

export const emptyPromise = () => new Promise<void>((resolve) => resolve());

export const mapSeries =
  <T, U>(mapper: (value: T) => Promise<U>) =>
  async (input: Iterable<T>): Promise<U[]> => {
    let a: U[] = [];
    for (let i of input) {
      const val = await mapper(i);
      a.push(val);
    }
    return a;
  };
