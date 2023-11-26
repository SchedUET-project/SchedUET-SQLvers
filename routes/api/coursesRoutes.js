import express from "express";
import * as courseController from "../../controllers/courseControllers.js";
import adminOnlyMiddleware from "../../middleware/adminOnly.js"


const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(adminOnlyMiddleware, courseController.addCourse);

router
  .route("/:id")
  .delete(adminOnlyMiddleware, courseController.deleteCourse)
  .put(adminOnlyMiddleware, courseController.updateCourse);

export default router;
