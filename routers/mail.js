const { Router } = require("express");
const sgMail = require('@sendgrid/mail');
const secrets = require('../config/secrets');

const router = new Router();

sgMail.setApiKey(secrets.sendGridApiKey);
// console.log(secrets.sendGridApiKey)

router.post("/", async (req, res) => {
  const { to } = req.body;
  console.log("TO THIS EMAIL:", to)
  try {
    if ( !to ) {
      res.status(400).send({message: "Something went wrong. Please make sure you have written a message"})
    }
    const msg = {
      to,
      from: 'codetrackerapp@gmail.com',
      subject: "Sign Up Confirmation",
      text: "Welcome, and thank you for signing up to CodeTracker!",
    };
    console.log("MESSAGE IS:", msg)

    sgMail.send(msg);
    res.status(200).send({ message: "ok" });
  } catch (error) {
    console.log("THE ERROR IS:", error.message)
  }
});

module.exports = router;