const express = require("express");

const router = express.Router();

const {

  createTrack,

  getTracks,

  getSingleTrack,

  updateTrack,

  deleteTrack,

} = require("../controllers/TrackController");



// CREATE
router.post(
  "/:eventId/tracks",
  createTrack
);


// GET ALL
router.get(
  "/:eventId/tracks",
  getTracks
);


// GET SINGLE
router.get(
  "/:eventId/tracks/:id",
  getSingleTrack
);


// UPDATE
router.put(
  "/:eventId/tracks/:id",
  updateTrack
);


// DELETE
router.delete(
  "/:eventId/tracks/:id",
  deleteTrack
);

module.exports = router;