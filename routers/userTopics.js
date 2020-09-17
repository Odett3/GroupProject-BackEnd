const { Router } = require("express");
const UserTopics = require("../models").userTopic;

const router = new Router();

router.get("/", async (req, res) => {
  const userTopics = await UserTopics.findAll();
  res.status(200).send({ message: "ok", userTopics });
});

module.exports = router;
