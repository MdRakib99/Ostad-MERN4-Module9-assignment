const express = require("express");
const router = require("./src/Routes/api");

const app = new express();

//Security Middleware  Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const hpp = require("hpp");
const cors = require("cors");

//Security Middleware  Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());

app.use(hpp());

app.use("/api/v1", router);

//Undefined Route

app.use("*", (req, res) => {
  res.status(404).json({ status: "failed", data: "Not found" });
});

module.exports = app;
