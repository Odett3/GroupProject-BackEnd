const { Router } = require("express");
const Topic = require("../models").topic;

const router = new Router();

router.get("/", async (req, res) => {
  const topics = await Topic.findAll();
  res.status(200).send({ message: "ok", topics });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  console.log("ID:", id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Topic id is not a number" });
  }

  const topic = await Topic.findByPk(id);
  console.log("LISTING:", topic)

  if (topic === null) {
    return res.status(404).send({ message: "Topic not found" });
  }

  res.status(200).send({ message: "ok", topic});
});

module.exports = router;