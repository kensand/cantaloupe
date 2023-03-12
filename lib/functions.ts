import { Nil, NonEmpty } from "./types";

// math operators
export const mod = <T extends number, U extends number>(x: T, y: U) => x % y;

export const inc = <T extends number>(x: T) => ++x;

export const dec = <T extends number>(x: T) => --x;

export const neg = <T extends number>(x: T) => -x;

// bitwise operators
export const bitwiseAnd = <T extends number, U extends number>(x: T, y: U) =>
  x & y;

export const bitwiseOr = <T extends number, U extends number>(x: T, y: U) =>
  x | y;

export const bitwiseXor = <T extends number, U extends number>(x: T, y: U) =>
  x ^ y;

export const bitwiseLeft = <T extends number, U extends number>(x: T, y: U) =>
  x << y;

export const bitwiseRight = <T extends number, U extends number>(x: T, y: U) =>
  x >> y;

export const bitwiseZ = <T extends number, U extends number>(x: T, y: U) =>
  x >>> y;

export const bitwiseNot = <T>(x: T) => ~x;

// comparators
export const gt = <T>(x: T, y: T) => x > y;

export const lt = <T>(x: T, y: T) => x < y;

export const gte = <T>(x: T, y: T) => x >= y;

export const lte = <T>(x: T, y: T) => x <= y;

export const negate =
  <T>(f: (t: T) => boolean) =>
  (t: T) =>
    !f(t);
