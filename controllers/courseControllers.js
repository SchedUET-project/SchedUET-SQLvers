import e from "express";
import courseMod from "../models/courseModels.js";
import wrapper from "../middleware/wrapper.js"

const getAllCourses = async (req, res, next) => {
  try {
    let [data, _] = await courseMod.getAllCourses();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const addCourse = async (req, res, next) => {
  try {
    let data = req.body;
    let [result, _] = await courseMod.addCourse(data);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  
};

const updateCourse = async (req, res, next) => {
  res.send("updateCourse");
};

export { getAllCourses, addCourse, deleteCourse, updateCourse };
