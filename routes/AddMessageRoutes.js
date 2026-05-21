const express = require("express");

const router = express.Router();

const messageController =
require("../controllers/AddMessageController");



router.get("/",
    messageController.getAllMessages
);


router.get("/:id",
    messageController.getSingleMessage
);


router.post("/",
    messageController.createMessage
);



router.put("/:id",
    messageController.updateMessage
);


router.delete("/:id",
    messageController.deleteMessage
);


module.exports = router;