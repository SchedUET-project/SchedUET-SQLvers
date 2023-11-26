import express from "express";
import * as takesController from "../../controllers/registrationControllers.js";
import thisUserOnlyMiddleware from "../../middleware/thisUserOnly.js";

const router = express.Router();

router.route("/sections/:id").get(thisUserOnlyMiddleware, takesController.getAllSections);
router.route("/takes/:id").get(thisUserOnlyMiddleware, takesController.getRegisteredSections);
router
  .route("/:id")
  .post(thisUserOnlyMiddleware, takesController.addTake)
  .delete(thisUserOnlyMiddleware, takesController.deleteTake);

export default router;
