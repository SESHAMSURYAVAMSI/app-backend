const express = require("express");

const router = express.Router();

const {
  createSessionAdd,
  getSessionAdds,
  getSingleSessionAdd,
  updateSessionAdd,
  deleteSessionAdd,
} = require("../controllers/SessionAddController");



router.post("/", createSessionAdd);

router.get("/", getSessionAdds);



router.get("/:id", getSingleSessionAdd);


router.put("/:id", updateSessionAdd);



router.delete("/:id", deleteSessionAdd);


module.exports = router;