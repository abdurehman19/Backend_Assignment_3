const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.json({ message: "Profile mil gaya", user: req.user
  });
});

module.exports = router;

