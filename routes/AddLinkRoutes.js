const express = require("express");

const router = express.Router();

const {
  createAddLink,
  getAddLinks,
  getSingleAddLink,
  updateAddLink,
  deleteAddLink,
} = require("../controllers/AddLinkController");
router.post("/", createAddLink);



router.get("/", getAddLinks);



router.get("/:id", getSingleAddLink);

router.put("/:id", updateAddLink);



router.delete("/:id", deleteAddLink);


module.exports = router;