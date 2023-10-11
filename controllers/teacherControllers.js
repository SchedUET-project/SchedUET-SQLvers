import teachMod from "../models/teacherModels.js";

const getAllTeachers = async (req, res, next) => {
  res.send("getAllTeachers");
};

const addTeacher = async (req, res, next) => {
  res.send("addTeacher");
};

const updateTeacher = async (req, res, next) => {
  res.send("updateTeacher");
};

const deleteTeacher = async (req, res, next) => {
  res.send("deleteTeacher");
};

export { getAllTeachers, addTeacher, updateTeacher, deleteTeacher };
