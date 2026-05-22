const express = require("express");

const router = express.Router();

const {

  createCommitteeType,

  getCommitteeTypes,

  getSingleCommitteeType,

  updateCommitteeType,

  deleteCommitteeType,

} = require(
  "../controllers/CommitteeTypeController"
);



// CREATE
router.post(

  "/:eventId/committee-types",

  createCommitteeType

);



// GET ALL
router.get(

  "/:eventId/committee-types",

  getCommitteeTypes

);



// GET SINGLE
router.get(

  "/:eventId/committee-types/:id",

  getSingleCommitteeType

);



// UPDATE
router.put(

  "/:eventId/committee-types/:id",

  updateCommitteeType

);



// DELETE
router.delete(

  "/:eventId/committee-types/:id",

  deleteCommitteeType

);

module.exports = router;