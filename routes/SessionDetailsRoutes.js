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
    "/",
    createSessionDetails
);


// GET ALL

router.get(
    "/",
    getSessionDetails
);


// GET SINGLE

router.get(
    "/:id",
    getSingleSessionDetails
);


// UPDATE

router.put(
    "/:id",
    updateSessionDetails
);


// DELETE

router.delete(
    "/:id",
    deleteSessionDetails
);


module.exports = router;