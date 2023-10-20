import { wrapper } from "../middleware/wrapper.js";
import teachMod from "../models/teacherModels.js";

const getAllTeachers = wrapper(async (req, res, next) => {
  let [result, _] = await teachMod.getAllTeachers();
  res.send(result);
});

const addTeacher = wrapper(async (req, res, next) => {
  let data = req.body;
  let [result, _] = await teachMod.addTeacher(data);
  res.send(result);
});

const updateTeacher = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  let [result, _] = await teachMod.updateTeacher(id, data);
  res.send(result);
});

const deleteTeacher = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [result, _] = await teachMod.deleteTeacher(id);
  res.send(result);
});

export { getAllTeachers, addTeacher, updateTeacher, deleteTeacher };
