const express = require("express");

const router = express.Router();

const {
  createAddExhibitorType,
  getAddExhibitorTypes,
  getSingleAddExhibitorType,
  updateAddExhibitorType,
  deleteAddExhibitorType,
} = require(
  "../controllers/AddExhibitorTypeController"
);

/**
 * GET ALL
 */
router.get(
  "/:eventId/exhibitor-types",
  getAddExhibitorTypes
);

/**
 * GET SINGLE
 */
router.get(
  "/:eventId/exhibitor-types/:id",
  getSingleAddExhibitorType
);

/**
 * CREATE
 */
router.post(
  "/:eventId/exhibitor-types",
  createAddExhibitorType
);

/**
 * UPDATE
 */
router.put(
  "/:eventId/exhibitor-types/:id",
  updateAddExhibitorType
);

/**
 * DELETE
 */
router.delete(
  "/:eventId/exhibitor-types/:id",
  deleteAddExhibitorType
);

module.exports = router;