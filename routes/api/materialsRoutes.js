import express from "express";
import * as materialController from "../../controllers/materialControllers.js";
import adminOnlyMiddleware from "../../middleware/adminOnly.js"


const router = express.Router();

router
  .route("/")
  .get(materialController.defaultController)
  .post(adminOnlyMiddleware, materialController.addMaterial);

router
  .route("/:id")
  .delete(adminOnlyMiddleware, materialController.deleteMaterial)
  .put(adminOnlyMiddleware, materialController.updateMaterial);

router.route("/search").get(materialController.getMaterials);

export default router;
