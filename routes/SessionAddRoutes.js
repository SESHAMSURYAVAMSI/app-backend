const express = require("express");

const router = express.Router();

const {

  createSessionAdd,

  getSessionAdds,

  getSingleSessionAdd,

  updateSessionAdd,

  deleteSessionAdd,

} = require("../controllers/SessionAddController");



// CREATE
router.post(

  "/:eventId/session-dates",

  createSessionAdd

);



// GET ALL
router.get(

  "/:eventId/session-dates",

  getSessionAdds

);



// GET SINGLE
router.get(

  "/:eventId/session-dates/:id",

  getSingleSessionAdd

);



// UPDATE
router.put(

  "/:eventId/session-dates/:id",

  updateSessionAdd

);



// DELETE
router.delete(

  "/:eventId/session-dates/:id",

  deleteSessionAdd

);

module.exports = router;