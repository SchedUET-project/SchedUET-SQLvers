import express from "express";
import * as materialController from "../../controllers/materialControllers.js";
const router = express.Router();

router
  .route("/")
  .get(materialController.defaultController)
  .post(materialController.addMaterial);

router
  .route("/:id")
  .delete(materialController.deleteMaterial)
  .put(materialController.updateMaterial);

router.route("/search").get(materialController.getMaterials);

export default router;
