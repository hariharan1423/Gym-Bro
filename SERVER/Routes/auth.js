const router = require("express").Router();
const User = require("../Models/UserDetails");
const bcrypt = require("bcrypt");
// const validator = require("validator")

//SIGN-UP
router.post("/Signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt); //HASHING
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

//LOGIN-AUTH
router.post("/Login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json("Incorrect-Details");
    }

    const validate = await bcrypt.compare(req.body.password, user.password); //COMPARING

    if (!validate) {
      return res.status(404).json("Incorrect-Details");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
