import courseMod from "../models/courseModels";

const getAllCourses = async (req, res, next) => {
  res.send("getAllCourses");
};

const addCourse = async (req, res, next) => {
  res.send("addCourse");
};

const deleteCourse = async (req, res, next) => {
  res.send("deleteCourse");
};

const updateCourse = async (req, res, next) => {
  res.send("updateCourse");
};

export { getAllCourses, addCourse, deleteCourse, updateCourse };
