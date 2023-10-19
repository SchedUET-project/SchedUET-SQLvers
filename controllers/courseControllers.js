import e from "express";
import courseMod from "../models/courseModels.js";
import wrapper from "../middleware/wrapper.js";

const getAllCourses = wrapper(async (req, res, next) => {
  let [data, _] = await courseMod.getAllCourses();
  res.send(data);
});

const addCourse = wrapper(async (req, res, next) => {
  let data = req.body;
  let [result, _] = await courseMod.addCourse(data);
  res.send(result);
});

const deleteCourse = wrapper(async (req, res, next) => {});

const updateCourse = wrapper(async (req, res, next) => {
  res.send("updateCourse");
});

export { getAllCourses, addCourse, deleteCourse, updateCourse };
