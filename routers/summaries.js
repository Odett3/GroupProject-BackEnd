const { Router } = require("express");
const Summary = require("../models").summary;

const router = new Router();

router.get("/", async (req, res) => {
  const summaries = await Summary.findAll();
  res.status(200).send({ message: "ok", summaries });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  console.log("ID:", id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Summary id is not a number" });
  }

  const summary = await Summary.findByPk(id);
  console.log("LISTING:", summary)

  if (summary === null) {
    return res.status(404).send({ message: "Summary not found" });
  }

  res.status(200).send({ message: "ok", summary});
});

module.exports = router;