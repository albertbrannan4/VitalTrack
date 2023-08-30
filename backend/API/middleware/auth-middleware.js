const db = require("../../data/db-config");
const User = require("../auth/auth-model");

const registerCredentialsRequired = async (req, res, next) => {
  const { username, password, email } = req.body;
  let message = "";

  if (!username) {
    message += "username is require";
  } else if (!email) {
    message += "email is required";
  } else if (!password) {
    message += "password is required";
  }

  if (message) {
    res.status(401).json(message);
  } else {
    next();
  }
};

const usernameAvailable = async (req, res, next) => {
  const { username } = req.body;
  const isAvailable = await User.getByUserName(username);
  if (isAvailable) {
    res.status(401).json({ message: `username: ${username} is taken.` });
  } else {
    next();
  }
};

const emailAlreadyRegistered = async (req, res, next) => {
  const { email } = req.body;
  const emailAvailable = await db("users").where("email", email).first();
  if (emailAvailable) {
    res.status(401).json({ message: `email is already registered` });
  } else {
    next();
  }
};

const loginCredentialsRequired = async (req, res, next) => {
  const { username, password } = req.body;
  let message = "";
  if (!username) {
    message = "username is required";
  } else if (!password) {
    message = "password is required";
  }

  if (message) {
    res.status(401).json(message);
  } else {
    next();
  }
};

module.exports = {
  registerCredentialsRequired,
  usernameAvailable,
  emailAlreadyRegistered,
  loginCredentialsRequired,
};
