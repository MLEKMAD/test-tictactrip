const express = require("express");
const { justify } = require("./lib/justify");
const { verifyToken, authenticate } = require("./lib/authenticate");
const RateLimiter = require("./lib/ratelimiter");

const REFRESH_TIME = 3600*24;
const MAX_WORDS_RATE = 80000;
let rateLimiter = new RateLimiter(REFRESH_TIME, MAX_WORDS_RATE);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
/**
 * A welcome message endpoint
 */
app.get("/", (req, res) => {
  res.json({
    publicURL: "https://text-justification.herokuapp.com/",
    message: "How's it going",
  });
});
/**
 * The main endpoint, it justifies a text 
 */
app.post("/api/justify", verifyToken, rateLimiter.middleware, (req, res) => {
  res.set("Content-Type", "text/plain");
  const justifiedText = justify(req.body);
  res.send(justifiedText);
});

/**
 * login endpoint
 */
app.post("/api/token", authenticate);

app.listen(process.env.PORT || 3000, () => console.log(`Server started on port ${process.env.PORT || 3000} `));

module.exports = app;
