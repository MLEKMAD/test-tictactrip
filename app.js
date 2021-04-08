const express = require("express");
const { justify } = require("./justify");
const { verifyToken, authenticate } = require("./utils/authenticate");
const RateLimiter = require("./utils/ratelimiter");

const REFRESH_TIME = 3600*24;
const MAX_WORDS_RATE = 80000;
let rateLimiter = new RateLimiter(REFRESH_TIME, MAX_WORDS_RATE);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.get("/api", (req, res) => {
  res.json({
    message: "How's it going",
  });
});
app.post("/api/justify", verifyToken, rateLimiter.middleware, (req, res) => {
  res.set("Content-Type", "text/plain");
  const justifiedText = justify(req.body);
  res.send(justifiedText);
});

app.post("/api/token", authenticate);

app.listen(process.env.PORT || 3000, () => console.log("Server started on port 3000"));

module.exports = app;
