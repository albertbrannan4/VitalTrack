const router = require("express").Router();
const User = require("./auth-model");
const {
  credentialsRequired,
  usernameAvailable,
  emailAlreadyRegistered,
} = require("../middleware/auth-middleware");

router.post(
  "/register",
  credentialsRequired,
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

module.exports = router;
