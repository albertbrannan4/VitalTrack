const router = require("express").Router();
const User = require("./auth-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { BCRYPT_ROUNDS, JWT_SECRET } = require("../../secrets");
const {
  registerCredentialsRequired,
  usernameAvailable,
  emailAlreadyRegistered,
  loginCredentialsRequired,
} = require("../middleware/auth-middleware");

router.post(
  "/register",
  registerCredentialsRequired,
  emailAlreadyRegistered,
  usernameAvailable,
  async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS);
      let userCreated = await User.addUser({ username, email, password: hash });
      res.status(201).json({
        Id: userCreated.user_id,
        message: `${userCreated.username} was created!`,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Something went wrong while creating user.` });
    }
  }
);

router.post("/login", loginCredentialsRequired, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.getByUserName(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = buildToken(user);
      res.json({
        message: `welcome, ${user.username}`,
        username: user.username,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: "something went wrong logging in" });
  }
});

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;
