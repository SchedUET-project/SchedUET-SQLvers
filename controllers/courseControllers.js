import e from "express";
import courseMod from "../models/courseModels.js";
import { wrapper } from "../middleware/wrapper.js";

const getAllCourses = wrapper(async (req, res, next) => {
  let [data, _] = await courseMod.getAllCourses();
  req.data = data;
  next();
});

const addCourse = wrapper(async (req, res, next) => {
  let queryData = req.body;
  let [data, _] = await courseMod.addCourse(queryData);
  req.data = data;
  next();
});

const deleteCourse = wrapper(async (req, res, next) => {
  let queryData = req.params.id;
  let [data, _] = await courseMod.deleteCourse(queryData);
  req.data = data;
  next();
});

const updateCourse = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let queryData = req.body;
  let [data, _] = await courseMod.updateCourse(id, queryData);
  req.data = data;
  next();
});

export { getAllCourses, addCourse, deleteCourse, updateCourse };
