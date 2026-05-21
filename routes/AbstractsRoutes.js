const express = require("express");

const router = express.Router();

const {
  createAbstract,
  getAbstracts,
  getSingleAbstract,
  updateAbstract,
  deleteAbstract,
} = require("../controllers/AbstractsController");


router.post("/", createAbstract);



router.get("/", getAbstracts);



router.get("/:id", getSingleAbstract);


router.put("/:id", updateAbstract);



router.delete("/:id", deleteAbstract);


module.exports = router;