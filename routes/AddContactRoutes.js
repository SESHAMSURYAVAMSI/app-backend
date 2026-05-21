 const express = require("express");

const router = express.Router();

const {
    createAddContact,
    getAllAddContacts,
    getSingleAddContact,
    updateAddContact,
    deleteAddContact
} = require("../controllers/AddContactController");

router.post("/", createAddContact);

router.get("/", getAllAddContacts);

router.get("/:id", getSingleAddContact);

router.put("/:id", updateAddContact);

router.delete("/:id", deleteAddContact);

module.exports = router;