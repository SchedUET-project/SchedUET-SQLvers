import { wrapper } from "../middleware/wrapper.js";
import teachMod from "../models/teacherModels.js";

const getAllTeachers = wrapper(async (req, res, next) => {
  let [data, _] = await teachMod.getAllTeachers();
  req.data = data;
  next();
});

const addTeacher = wrapper(async (req, res, next) => {
  let queryData = req.body;
  let [data, _] = await teachMod.addTeacher(queryData);
  req.data = data;
  next();
});

const updateTeacher = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let queryData = req.body;
  let [data, _] = await teachMod.updateTeacher(id, queryData);
  req.data = data;
  next();
});

const deleteTeacher = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await teachMod.deleteTeacher(id);
  req.data = data;
  next();
});

export { getAllTeachers, addTeacher, updateTeacher, deleteTeacher };
