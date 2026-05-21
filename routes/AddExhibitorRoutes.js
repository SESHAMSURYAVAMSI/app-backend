const express = require("express");

const router = express.Router();

const exhibitorController =
require("../controllers/AddExhibitorController");



router.get("/",
    exhibitorController.getAllExhibitors
);



router.get("/:id",
    exhibitorController.getSingleExhibitor
);


router.post("/",
    exhibitorController.createExhibitor
);



router.put("/:id",
    exhibitorController.updateExhibitor
);

router.delete("/:id",
    exhibitorController.deleteExhibitor
);


module.exports = router;