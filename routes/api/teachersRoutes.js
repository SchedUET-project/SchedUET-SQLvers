import express from "express";
import * as teacherController from "../../controllers/teacherControllers.js";
const router = express.Router();

router
  .route("/")
  .get(teacherController.getAllTeachers)
  .post(teacherController.addTeacher);

router
  .route("/:id")
  .put(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);

export default router;
