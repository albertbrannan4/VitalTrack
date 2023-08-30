const router = require("express").Router();
const User = require("./auth-model");
router.post("/register", async (req, res) => {
  try {
    let userCreated = await User.addUser(req.body);
    res.status(201).json(userCreated);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Something went wrong while creating user.` });
  }
});

module.exports = router;
