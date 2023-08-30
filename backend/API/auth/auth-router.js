const router = require("express").Router();
const User = require("./auth-model");
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
    try {
      let userCreated = await User.addUser(req.body);
      res.status(201).json({ message: `${userCreated.username} was created` });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Something went wrong while creating user.` });
    }
  }
);

router.post("/login", loginCredentialsRequired, async (req, res) => {
  try {
    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong logging in." });
  }
});

module.exports = router;
