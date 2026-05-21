const express = require("express");

const router = express.Router();

const {
  createSpeakerType,
  getSpeakerTypes,
  getSingleSpeakerType,
  updateSpeakerType,
  deleteSpeakerType,
} = require("../controllers/SpeakerTypeController");



router.post("/", createSpeakerType);



router.get("/", getSpeakerTypes);



router.get("/:id", getSingleSpeakerType);



router.put("/:id", updateSpeakerType);



router.delete("/:id", deleteSpeakerType);


module.exports = router;