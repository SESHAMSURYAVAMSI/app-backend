const express = require("express");

const router = express.Router();

const messageController =
require("../controllers/AddMessageController");

/**
 * GET ALL
 */
router.get(
  "/:eventId/push-messages",
  messageController.getAllMessages
);

/**
 * GET SINGLE
 */
router.get(
  "/:eventId/push-messages/:id",
  messageController.getSingleMessage
);

/**
 * CREATE
 */
router.post(
  "/:eventId/push-messages",
  messageController.createMessage
);

/**
 * UPDATE
 */
router.put(
  "/:eventId/push-messages/:id",
  messageController.updateMessage
);

/**
 * DELETE
 */
router.delete(
  "/:eventId/push-messages/:id",
  messageController.deleteMessage
);

module.exports = router;