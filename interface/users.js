const express = require("express");
const router = express.Router();
const user = require("../modal/userModal");

router.get("/", async (req, res) => {
  try {
    const users = await Subscriber.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const user = new user({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
    console.log("User has been added");
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log("User can not added");
  }
});
