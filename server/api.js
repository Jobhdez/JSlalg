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

import express from "express";
import bodyParser from "body-parser";
import { compute, computeOneParam } from "./utils.js";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/vectors/add", (req, res) => {
  let result = compute(addv, req);

  res.json({ expr: result });
});

app.post("/api/vectors/sub", (req, res) => {
  let result = compute(subv, req);

  res.json({ expr: result });
});

app.post("/api/vectors/dotp", (req, res) => {
  res.json({ expr: compute(dotp, req) });
});

app.post("/api/vectors/max", (req, res) => {
  res.json({ expr: compute(maxv, req) });
});

app.post("/api/vectors/min", (req, res) => {
  res.json({ expr: compute(minv, req) });
});

app.post("/api/vectors/vecs", (req, res) => {
  res.json({ expr: compute(vecs, req) });
});

app.post("/api/vectors/log", (req, res) => {
  res.json({ expr: computeOneParam(logv, req) });
});

app.post("/api/vectors/exp", (req, res) => {
  res.json({ expr: computeOneParam(expv, req) });
});

app.post("/api/vectors/pow", (req, res) => {
  res.json({ expr: computeOneParam(powv, req) });
});

app.post("/api/matrices/add", (req, res) => {
  let result = compute(addm, req);

  res.json({ expr: result });
});

app.post("/api/matrices/sub", (req, res) => {
  let result = compute(subm, req);

  res.json({ expr: result });
});

app.post("/api/matrices/mul", (req, res) => {
  res.json({ expr: compute(matMul, req) });
});

app.post("/api/matrices/max", (req, res) => {
  res.json({ expr: compute(maxv, req) });
});

app.post("/api/matrices/min", (req, res) => {
  res.json({ expr: compute(minv, req) });
});

app.post("/api/matrices/mats", (req, res) => {
  res.json({ expr: compute(mats, req) });
});

app.post("/api/matrices/log", (req, res) => {
  res.json({ expr: computeOneParam(logm, req) });
});

app.post("/api/matrices/exp", (req, res) => {
  res.json({ expr: computeOneParam(expm, req) });
});

app.post("/api/matrices/pow", (req, res) => {
  res.json({ expr: computeOneParam(powm, req) });
});

const server = app.listen(3000, () =>
  console.log(`
    Server ready at: http://localhost:3000`),
);
