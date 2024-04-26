import { expect } from "chai";
import {
  // vectors
  addv,
  subv,
  vecs,
  dotp,
  logv,
  powv,
  expv,
  maxv,
  minv,
  // matrices
  addm,
  subm,
  mats,
  matMul,
  logm,
  powm,
  expm,
  maxm,
  minm,
  transpose,
  // polynomials
  addp,
  subp,
  degree,
} from "../src/lib.js";

describe("vector tests", function () {
  it("test vector sum", () => {
    let v = [3, 4, 5, 6];
    expect(addv(v, v)).to.eql([6, 8, 10, 12]);
  });

  it("test vector subtraction", () => {
    let v2 = [3, 4, 5, 6];
    expect(subv(v2, v2)).to.eql([0, 0, 0, 0]);
  });

  it("test vector-scalar multiplication", () => {
    let v3 = [3, 4, 5, 6];
    expect(vecs(v3, 2)).to.eql([6, 8, 10, 12]);
  });

  it("test dot product", () => {
    let v4 = [-6, 8];
    let v5 = [5, 12];
    expect(dotp(v4, v5)).to.eql(66);
  });

  it("test element wise power, scalar", () => {
    let v4 = [2, 3, 4];
    let v5 = [1, 1, 1];
    expect(powv(v4, v5)).to.eql([2, 3, 4]);
  });

  it("test exponential of vector", () => {
    let v7 = [3, 4, 5];
    expect(expv(v7)).to.eql([
      20.085536923187668, 54.598150033144236, 148.4131591025766,
    ]);
  });

  it("test natural logarithm of vector", () => {
    let v8 = [3, 4, 6];
    expect(logv(v8)).to.eql([
      1.0986122886681096, 1.3862943611198906, 1.791759469228055,
    ]);
  });

  it("test element wise vector maximum", () => {
    let v = [3, 2, 1];
    let v2 = [4, 1, 3];
    expect(maxv(v, v2)).to.eql([4, 2, 3]);
  });

  it("test element wise vector minimum", () => {
    let v = [3, 2, 1];
    let v2 = [4, 1, 3];
    expect(minv(v, v2)).to.eql([3, 1, 1]);
  });
});

describe("matrix tests", function () {
  it("test matrix addition", () => {
    let m1 = [
      [2, 3, 4],
      [5, 6, 7],
    ];
    let m2 = [
      [3, 4, 5],
      [5, 6, 7],
    ];
    expect(addm(m1, m2)).to.eql([
      [5, 7, 9],
      [10, 12, 14],
    ]);
  });

  it("test matrix-scalar multiplication", () => {
    let m3 = [
      [2, 3, 5],
      [5, 6, 7],
    ];
    expect(mats(m3, 2)).to.eql([
      [4, 6, 10],
      [10, 12, 14],
    ]);
  });

  it("test matrix transpose", () => {
    let m4 = [
      [2, 3, 4],
      [5, 6, 7],
    ];
    expect(transpose(m4)).to.eql([
      [2, 5],
      [3, 6],
      [4, 7],
    ]);
  });

  it("test element wise matrix power", () => {
    let m6 = [
      [2, 3, 5],
      [5, 6, 7],
    ];
    let m7 = [
      [2, 2, 2],
      [2, 2, 2],
    ];

    expect(powm(m6, m7)).to.eql([
      [4, 9, 25],
      [25, 36, 49],
    ]);
  });

  it("test element wise exp  matrix", () => {
    let m7 = [
      [4, 5, 6],
      [6, 7, 8],
    ];
    expect(expm(m7)).to.eql([
      [54.598150033144236, 148.4131591025766, 403.4287934927351],
      [403.4287934927351, 1096.6331584284585, 2980.9579870417283],
    ]);
  });

  it("test element wise log  matrix", () => {
    let m8 = [
      [4, 5, 6],
      [6, 6, 7],
    ];
    expect(logm(m8)).to.eql([
      [1.3862943611198906, 1.6094379124341003, 1.791759469228055],
      [1.791759469228055, 1.791759469228055, 1.9459101490553132],
    ]);
  });

  it("test element wise matrix maximum", () => {
    let m = [
      [3, 2, 2, 3],
      [4, 3, 4, 5],
    ];
    let m2 = [
      [2, 3, 3, 2],
      [3, 2, 5, 3],
    ];
    expect(maxm(m, m2)).to.eql([
      [3, 3, 3, 3],
      [4, 3, 5, 5],
    ]);
  });

  it("test element wise matrix minmum", () => {
    let m = [
      [3, 2, 2, 3],
      [4, 3, 4, 5],
    ];
    let m2 = [
      [2, 3, 3, 2],
      [3, 2, 5, 3],
    ];
    expect(minm(m, m2)).to.eql([
      [2, 2, 2, 2],
      [3, 2, 4, 3],
    ]);
  });
});

describe("Polynomial tests", function () {
  it("test polynomial degree", () => {
    let poly = [2, 3, 5, 1];
    expect(degree(poly)).to.eql(3);
  });

  it("test polynomial addition", () => {
    let poly2 = [2, 3, 5, 1];
    let poly3 = [6, 7, 8, 9];
    expect(addp(poly2, poly3)).to.eql([8, 10, 13, 10]);
  });

  it("test polynomial subtraction", () => {
    let poly4 = [6, 7, 8, 9];
    let poly5 = [2, 3, 5, 1];
    expect(subp(poly4, poly5)).to.eql([4, 4, 3, 8]);
  });
});
