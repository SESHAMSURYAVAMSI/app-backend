const express = require("express");

const router = express.Router();

const {
  createAddLink,
  getAddLinks,
  getSingleAddLink,
  updateAddLink,
  deleteAddLink,
} = require("../controllers/AddLinkController");

/**
 * CREATE
 */
router.post(
  "/:eventId/quick-links",
  createAddLink
);

/**
 * GET ALL
 */
router.get(
  "/:eventId/quick-links",
  getAddLinks
);

/**
 * GET SINGLE
 */
router.get(
  "/:eventId/quick-links/:id",
  getSingleAddLink
);

/**
 * UPDATE
 */
router.put(
  "/:eventId/quick-links/:id",
  updateAddLink
);

/**
 * DELETE
 */
router.delete(
  "/:eventId/quick-links/:id",
  deleteAddLink
);

module.exports = router;