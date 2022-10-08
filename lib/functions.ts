import { List } from "lodash";
import {
  flow,
  filter,
  map,
  isNil,
  negate,
  isEmpty,
  isEqualWith,
  isEqual,
} from "lodash/fp";

export const isEnum =
  <T extends ArrayLike<unknown> | { [s: string]: unknown } | {}>(e: T) =>
  (token: any): token is T[keyof T] =>
    Object.values(e).includes(token as T[keyof T]);

// math operators
const mod = <T extends number, U extends number>(x: T, y: U) => x % y;

const inc = <T extends number>(x: T) => ++x;

const dec = <T extends number>(x: T) => --x;

const neg = <T extends number>(x: T) => -x;

// bitwise operators
const bitwiseAnd = <T extends number, U extends number>(x: T, y: U) => x & y;

const bitwiseOr = <T extends number, U extends number>(x: T, y: U) => x | y;

const bitwiseXor = <T extends number, U extends number>(x: T, y: U) => x ^ y;

const bitwiseLeft = <T extends number, U extends number>(x: T, y: U) => x << y;

const bitwiseRight = <T extends number, U extends number>(x: T, y: U) => x >> y;

const bitwiseZ = <T extends number, U extends number>(x: T, y: U) => x >>> y;

const bitwiseNot = <T>(x: T) => ~x;

// comparators
const gt = <T>(x: T, y: T) => x > y;

const lt = <T>(x: T, y: T) => x < y;

const gte = <T>(x: T, y: T) => x >= y;

const lte = <T>(x: T, y: T) => x <= y;

// negated operators
export const isNotNil = negate(isNil);
export const isNotEmpty = negate(isEmpty);
export const isNotEqual = negate(isEqual);
export const isNotEqualWith = negate(isEqualWith);
export const isNotEnum = negate(isEnum);

export const filterNotNil: <T>(
  collection:
    | (T | null | undefined)[]
    | List<T | null | undefined>
    | null
    | undefined
) => T[] = filter(isNotNil);

export const mapNotNil: <T, U>(
  f: (arg0: T) => U | null | undefined
) => (collection: T[] | List<T> | null | undefined) => U[] = (f) =>
  flow(map(f), filterNotNil);

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

export const emptyPromise = () =>
  new Promise<undefined>((resolve) => resolve(undefined));

export const mapSeries = <T, U>(mapper: (value: T) => Promise<U>) => async (input: Iterable<T>): Promise<U[]> => {
    let a: U[] = [];
    for (let i of input) {
        const val = await mapper(i);
        a.push(val);
    }
    return a;
};
