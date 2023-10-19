import { wrapper } from "../middleware/wrapper.js";
import teachMod from "../models/teacherModels.js";

const getAllTeachers = wrapper(async (req, res, next) => {
  res.send("getAllTeachers");
});

const addTeacher = wrapper(async (req, res, next) => {
  res.send("addTeacher");
});

const updateTeacher = wrapper(async (req, res, next) => {
  res.send("updateTeacher");
});

const deleteTeacher = wrapper(async (req, res, next) => {
  res.send("deleteTeacher");
});

export { getAllTeachers, addTeacher, updateTeacher, deleteTeacher };
