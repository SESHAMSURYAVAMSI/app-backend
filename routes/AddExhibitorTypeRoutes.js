const express = require("express");

const router = express.Router();

const {
  createAddExhibitorType,
  getAddExhibitorTypes,
  getSingleAddExhibitorType,
  updateAddExhibitorType,
  deleteAddExhibitorType,
} = require("../controllers/AddExhibitorTypeController");


router.post("/", createAddExhibitorType);



router.get("/", getAddExhibitorTypes);



router.get("/:id", getSingleAddExhibitorType);

router.put("/:id", updateAddExhibitorType);



router.delete("/:id", deleteAddExhibitorType);


module.exports = router;