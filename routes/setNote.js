var express = require("express");
var router = express.Router();
var message = require("../models/notes");

/* GET users listing. */
router.post("/", async function (req, res, next) {
  console.log(req.body);
  const { subject, text, time } = req.body;
  try {
    const checkExist = await message.findOne({ subject, message: text });
    console.log(checkExist);
    if (checkExist) {
      res
        .status(500)
        .send({ response: "Error, Note already exist", id: checkExist._id });
    } else {
      const data = new message({
        subject: req.body.subject,
        message: req.body.text,
        time: req.body.time,
      });
      data.save().then((rest) => {
        res.status(200).json({
          response: "Success",
          data: rest,
        });
      });
    }
  } catch (error) {
    res.status(500).send({ error });
    console.log(error);
  }
});

module.exports = router;
