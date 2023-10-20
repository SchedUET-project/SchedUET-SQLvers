import express from "express";
import * as sectionController from "../../controllers/sectionControllers.js";
const router = express.Router();

router.route("/").post(sectionController.addSection);

router.route("/:id").get(sectionController.getAllSections);
router
  .route("/:courseid/:sectionid")
  .put(sectionController.updateSection)
  .delete(sectionController.deleteSection);

export default router;
