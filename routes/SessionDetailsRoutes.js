const express = require("express");

const router = express.Router();

const {

  createSessionDetails,

  getSessionDetails,

  getSingleSessionDetails,

  updateSessionDetails,

  deleteSessionDetails

} = require(
  "../controllers/SessionDetailsController"
);



// CREATE
router.post(
  "/:eventId/schedules",
  createSessionDetails
);



// GET ALL
router.get(
  "/:eventId/schedules",
  getSessionDetails
);



// GET SINGLE
router.get(
  "/:eventId/schedules/:id",
  getSingleSessionDetails
);



// UPDATE
router.put(
  "/:eventId/schedules/:id",
  updateSessionDetails
);



// DELETE
router.delete(
  "/:eventId/schedules/:id",
  deleteSessionDetails
);

module.exports = router;