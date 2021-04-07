const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;
// middleware to verify the token duh
exports.verifyToken = (req, res, next) => {
  // getting header
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    //getting the token
    const [, bearerToken] = bearerHeader.split(" ");
    jwt.verify(bearerToken, process.env.SECRET_KEY, (err, data) => {
      if (err) {
        res.sendStatus(403);
        return;
      }
      req.user = data;
    });
    next();
  } else {
    res.sendStatus(403);
  }
};


/**
 * It authenticates the user 
 * To keep it simple, we used one user who is foo@bar.fr
 * @param {*} req 
 * @param {*} res 
 */
exports.authenticate = (req, res) => {
  // Mock user
  const user = {
    email: "foo@bar.fr",
  };

  if (!req.body || !req.body.email) {
    res.sendStatus(401);
    return 
  }
  if (req.body.email !== user.email) {
    res.sendStatus(401);
    return;
  }
  jwt.sign({ user }, SECRET_KEY, (err, token) => {
    res.setHeader('authorization', `bearer ${token}`);
    res.json(user);
  });
};
