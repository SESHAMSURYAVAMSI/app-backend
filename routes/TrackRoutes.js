const express = require("express");

const router = express.Router();

const {
  createTrack,
  getTracks,
  getSingleTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/TrackController");



router.post("/", createTrack);



router.get("/", getTracks);



router.get("/:id", getSingleTrack);



router.put("/:id", updateTrack);



router.delete("/:id", deleteTrack);


module.exports = router;