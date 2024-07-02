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
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { expressjwt } from "express-jwt";

// Mock user database
const users = [];

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SECRET_KEY = "your-secret-key"; // Replace with your own secret key

// Authentication middleware
const authenticate = expressjwt({ secret: SECRET_KEY, algorithms: ["HS256"] });

// Register endpoint
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  // Create new user
  const newUser = {
    id: users.length + 1,
    username: username,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      {
        expiresIn: "1h", // Token expires in 1 hour
      },
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Protect all endpoints with authentication
app.use(authenticate);

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
