import express from "express";
import * as scheduleController from "../../controllers/scheduleControllers.js";
import thisUserOnlyMiddleware from "../../middleware/thisUserOnly.js";

const router = express.Router();

router
  .route("/:id")
  .get(thisUserOnlyMiddleware, scheduleController.getSchedulesById)
  .post(thisUserOnlyMiddleware, scheduleController.addSchedule)
  .delete(thisUserOnlyMiddleware, scheduleController.deleteSchedule);

router.route("/takes/:id").get(thisUserOnlyMiddleware, scheduleController.getSchedulesByTakes);
router.route("/sections/:id").get(thisUserOnlyMiddleware, scheduleController.getAllSections);

export default router;
