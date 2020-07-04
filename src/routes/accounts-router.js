const express = require("express");
const appLogger = require("../utils/app-logger");
const userAccount = require("../controler/accouts-controler");
const router = express.Router();
const path = require("path");

const userLogin = async (req, res) => {
  try {
    console.log(req.body);
    const resBody = await userAccount.userLogIn(req.body);
    res.status(200).json(resBody);
  } catch (err) {}
};

const userSignUp = async (req, res) => {
  try {
    console.log(req.body);
    const resBody = await userAccount.userSignUp(req.body);
    res.status(200).json(resBody);
  } catch (err) {}
};

router.post("/log-in", userLogin);
router.post("/sign-up", userSignUp);
// router.get('/compelete-sign-up' , userCompeleteSignUp)

module.exports = router;
