const express = require("express");

const router = express.Router();

const {
  createAddContact,
  getAllAddContacts,
  getSingleAddContact,
  updateAddContact,
  deleteAddContact,
} = require("../controllers/AddContactController");


// CREATE
router.post(
  "/:eventId/contacts",
  createAddContact
);


// GET ALL
router.get(
  "/:eventId/contacts",
  getAllAddContacts
);


// GET SINGLE
router.get(
  "/:eventId/contacts/:id",
  getSingleAddContact
);


// UPDATE
router.put(
  "/:eventId/contacts/:id",
  updateAddContact
);


// DELETE
router.delete(
  "/:eventId/contacts/:id",
  deleteAddContact
);

module.exports = router;