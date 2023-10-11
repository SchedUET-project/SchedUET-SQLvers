import express from "express";
import * as takesController from "../../controllers/registrationControllers.js";
const router = express.Router();

router.route("/").get(takesController.defaultController);
router.route("/sections/:id").get(takesController.getAllSections);
router.route("/takes/:id").get(takesController.getRegisteredSections);
router
  .route("/:id")
  .post(takesController.addTake)
  .delete(takesController.deleteTake);
  
export default router;
