const express = require("express");

const router = express.Router();

const {
  createCommitteeType,
  getCommitteeTypes,
  getSingleCommitteeType,
  updateCommitteeType,
  deleteCommitteeType,
} = require("../controllers/CommitteeTypeController");


router.post("/", createCommitteeType);



router.get("/", getCommitteeTypes);


router.get("/:id", getSingleCommitteeType);


router.put("/:id", updateCommitteeType);


router.delete("/:id", deleteCommitteeType);


module.exports = router;