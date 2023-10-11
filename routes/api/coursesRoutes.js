import express from "express";
import * as courseController from "../../controllers/courseControllers.js";
const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.addCourse);

router
  .route("/:id")
  .delete(courseController.deleteCourse)
  .put(courseController.updateCourse);

export default router;
