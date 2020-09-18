const { Router } = require("express");
const Topic = require("../models").topic;
const Summary = require("../models").summary;

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

router.post("/:id", async (req, res) => {
  const { description, userId, topicId } = req.body;
  if (!description || !userId || !topicId) {
    res.status(400).send({message: "Something went wrong. Please make sure you are logged in and have written a summary"})
  }

  const newSummary = await Summary.create({
    description,
    userId,
    topicId,
  })
  
  res.status(200).send({ message: "ok", newSummary });
});

module.exports = router;