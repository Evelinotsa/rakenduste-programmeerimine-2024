const express = require("express");
const router = express.Router();

router.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

router.get("/users/:userID/books/:bookID", (req, res) => {
  res.send(req.params);
});

//router.get("/posts/:postID", (req, res) => {
//  res.send(req.params);
//});

const postMiddleware = (req, res, next) => {
  console.log("The response will be sent by the next function");
  next();
};

const postHandle = (req, res) => {
  res.send(req.params);
};

router.get("/posts/:postID", postMiddleware, postHandle);

router.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

router.get("/ferries/:from-:to", (req, res) => {
  res.send(req.params);
});

module.exports = router;
