import e from "express";
import courseMod from "../models/courseModels.js";
import { wrapper } from "../middleware/wrapper.js";

const getAllCourses = wrapper(async (req, res, next) => {
  let [result, _] = await courseMod.getAllCourses();
  res.send(result);
});

const addCourse = wrapper(async (req, res, next) => {
  let data = req.body;
  let [result, _] = await courseMod.addCourse(data);
  res.send(result);
});

const deleteCourse = wrapper(async (req, res, next) => {
  let data = req.params.id;
  let [result, _] = await courseMod.deleteCourse(data);
  res.send(result);
});

const updateCourse = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let data = req.body
  let [result, _] = await courseMod.updateCourse(id, data)
  res.send(result);
});

export { getAllCourses, addCourse, deleteCourse, updateCourse };
