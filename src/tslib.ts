type Op = (a: number, b: number) => number;
type Op2d = (a: number[], b: number[]) => number[];
type Opv = (a: LalgObj, b: LalgObj) => Vector;
type Opm = (a: LalgObj, b: LalgObj) => Matrix;

type Operation = Op | Op2d;
type OperRet = Opv | Opm;

type Vector = number[];
type Matrix = number[][];
type LalgObj = Vector | Matrix;

const elementWise = (op: Operation): OperRet => {
  return (v: LalgObj, v2: LalgObj): LalgObj => v.map((x, i) => op(x, v2[i]));
};

const add = (e: number, e2: number): number => {
  return e + e2;
};

export const addv = elementWise(add);
export const addm = elementWise(addv);
