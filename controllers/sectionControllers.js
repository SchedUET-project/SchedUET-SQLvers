import { wrapper } from "../middleware/wrapper.js";
import secMod from "../models/sectionModels.js";

const getAllSectionsFullInfo = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await secMod.getAllSectionsFullInfo(id);
  req.data = data;
  next();
});

const getAllSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await secMod.getAllSections(id);
  req.data = data;
  next();
});

const addSection = wrapper(async (req, res, next) => {
  let queryData = req.body;
  let [data, _] = await secMod.addSection(queryData);
  req.data = data;
  next();
});

const updateSection = wrapper(async (req, res, next) => {
  let courseID = req.params.courseid;
  let sectionID = req.params.sectionid;
  let queryData = req.body;
  let [data, _] = await secMod.updateSection(courseID, sectionID, queryData);
  req.data = data;
  next();
});

const deleteSection = wrapper(async (req, res, next) => {
  let courseID = req.params.courseid;
  let sectionID = req.params.sectionid;
  let [data, _] = await secMod.deleteSection(courseID, sectionID);
  req.data = data;
  next();
});

export {
  getAllSections,
  addSection,
  updateSection,
  deleteSection,
  getAllSectionsFullInfo
};
