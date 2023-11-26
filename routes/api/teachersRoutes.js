import express from "express";
import * as teacherController from "../../controllers/teacherControllers.js";
import adminOnlyMiddleware from "../../middleware/adminOnly.js";

const router = express.Router();

router
  .route("/")
  .get(teacherController.getAllTeachers)
  .post(adminOnlyMiddleware, teacherController.addTeacher);

router
  .route("/:id")
  .put(adminOnlyMiddleware, teacherController.updateTeacher)
  .delete(adminOnlyMiddleware, teacherController.deleteTeacher);

export default router;
