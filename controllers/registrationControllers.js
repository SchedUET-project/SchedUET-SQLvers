import takeMod from "../models/takeModels.js";
import secMod from "../models/sectionModels.js";
import prereqMod from "../models/prereqModels.js";
import tookMod from "../models/tookModels.js";
import { wrapper } from "../middleware/wrapper.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await takeMod.defaultQuery();
  req.data = data;
  next();
});
const getAllSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await secMod.getAllSections(id);
  req.data = data;
  next();
});

const getRegisteredSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await takeMod.getTakesByStudentId(id);
  req.data = data;
  next();
});

const deleteTake = wrapper(async (req, res, next) => {
  let queryData = req.body;
  queryData["accountID"] = req.params.id;
  let [data, _] = await takeMod.deleteTake(queryData);
  req.data = data;
  next();
});

const preReqInTook = function (prereq, took) {
  for (const pr of prereq) {
    let prInTook = false;
    for (const tk of took) {
      if (pr.preReqCourseID == tk) {
        prInTook = true;
      }
    }
    if (!prInTook) {
      return false;
    }
  }

  return true;
};

const addTake = wrapper(async (req, res, next) => {
  let queryData = req.body;
  queryData["accountID"] = req.params.id;
  let [prereq, _1] = await prereqMod.getPreReqOfCourse(queryData["courseID"]);
  let [took, _2] = await tookMod.getTook(queryData["accountID"]);


  if (!preReqInTook(prereq, took)) {
    return next({
      message: "you haven't register the prerequisite courses",
    });
  } else {
    let [data, _3] = await takeMod.addTake(queryData);
    req.data = data;
    next();
  }
});

export {
  defaultController,
  getAllSections,
  getRegisteredSections,
  deleteTake,
  addTake,
};
