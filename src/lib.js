let elementWise = (op) => {
  return (v, v2) => v.map((x, i) => op(x, v2[i]));
};

let elementWiseOneParam = (op) => {
  return (v) => v.map((x) => op(x));
};

let add = (e, e2) => {
  return e + e2;
};
let sub = (e, e2) => {
  return e - e2;
};
let mul = (e, e2) => {
  return e * e2;
};

let addv = elementWise(add);
let addm = elementWise(addv);

let subv = elementWise(sub);
let subm = elementWise(subv);

let mulv = elementWise(mul);
function dotp(v, v2) {
  return mulv(v, v2).reduce((accumulator, val) => accumulator + val);
}

function vecs(v, s) {
  return v.map((val) => val * s);
}

function mats(m, s) {
  return m.map((val, i) => vecs(val, s));
}

let powv = elementWise(Math.pow);
let powm = elementWise(powv);

let maxv = elementWise(Math.max);
let maxm = elementWise(maxv);

let minv = elementWise(Math.min);
let minm = elementWise(minv);

let expv = elementWiseOneParam(Math.exp);
let expm = elementWiseOneParam(expv);

let logv = elementWiseOneParam(Math.log);
let logm = elementWiseOneParam(logv);

function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

function matMul(m, m2) {
  return m.map((row) => transpose(m2).map((col) => dotp(row, col)));
}

// polynomials

let addp = elementWise(add);
let subp = elementWise(sub);

function degree(poly) {
  return poly.length - 1;
}
module.exports = {
  addv,
  addm,
  subv,
  subm,
  dotp,
  vecs,
  mats,
  powv,
  powm,
  maxv,
  maxm,
  minv,
  minm,
  expv,
  expm,
  logv,
  logm,
  transpose,
  matMul,
  //poly
  addp,
  subp,
  degree,
};
