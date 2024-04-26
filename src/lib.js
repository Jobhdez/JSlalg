// some basic linear algebra :-)

const elementWise = (op) => {
  return (v, v2) => v.map((x, i) => op(x, v2[i]));
};

const elementWiseOneParam = (op) => {
  return (v) => v.map((x) => op(x));
};

const add = (e, e2) => {
  return e + e2;
};
const sub = (e, e2) => {
  return e - e2;
};
const mul = (e, e2) => {
  return e * e2;
};

export const addv = elementWise(add);
export const addm = elementWise(addv);

export const subv = elementWise(sub);
export const subm = elementWise(subv);

export const mulv = elementWise(mul);
export function dotp(v, v2) {
  return mulv(v, v2).reduce((accumulator, val) => accumulator + val);
}

export function vecs(v, s) {
  return v.map((val) => val * s);
}

export function mats(m, s) {
  return m.map((val, i) => vecs(val, s));
}

export const powv = elementWise(Math.pow);
export const powm = elementWise(powv);

export const maxv = elementWise(Math.max);
export const maxm = elementWise(maxv);

export const minv = elementWise(Math.min);
export const minm = elementWise(minv);

export const expv = elementWiseOneParam(Math.exp);
export const expm = elementWiseOneParam(expv);

export const logv = elementWiseOneParam(Math.log);
export const logm = elementWiseOneParam(logv);

export function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

export function matMul(m, m2) {
  return m.map((row) => transpose(m2).map((col) => dotp(row, col)));
}

// polynomials

export const addp = elementWise(add);
export const subp = elementWise(sub);

export function degree(poly) {
  return poly.length - 1;
}
