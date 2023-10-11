import express from "express";
import * as scheduleController from "../../controllers/scheduleControllers.js";
const router = express.Router();

router.route("/").get(scheduleController.defaultController);
router
  .route("/:id")
  .get(scheduleController.getSchedulesById)
  .post(scheduleController.addSchedule)
  .delete(scheduleController.deleteSchedule);

router.route("/takes/:id").get(scheduleController.getSchedulesByTakes);
router.route("/sections/:id").get(scheduleController.getAllSections);

export default router;
