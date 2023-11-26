import express from "express";
import * as sectionController from "../../controllers/sectionControllers.js";
import adminOnlyMiddleware from "../../middleware/adminOnly.js";

const router = express.Router();

router.route("/").post(adminOnlyMiddleware, sectionController.addSection);

router.route("/:id").get(adminOnlyMiddleware, sectionController.getAllSections);
router
  .route("/:courseid/:sectionid")
  .put(adminOnlyMiddleware, sectionController.updateSection)
  .delete(adminOnlyMiddleware, sectionController.deleteSection);

export default router;
