import { wrapper } from "../middleware/wrapper.js";
import secMod from "../models/sectionModels.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await secMod.defaultQuery();
  res.json(data);
});

const getAllSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [result, _] = await secMod.getAllSections(id);
  res.send(result);
});

const addSection = wrapper(async (req, res, next) => {
  let data = req.body;
  let [result, _] = await secMod.addSection(data);
  res.send(result);
});

const updateSection = wrapper(async (req, res, next) => {
  let courseID = req.params.courseid;
  let sectionID = req.params.sectionid;
  let data = req.body;
  let [result, _] = await secMod.updateSection(courseID, sectionID, data);
  res.send(result);
});

const deleteSection = wrapper(async (req, res, next) => {
  let courseID = req.params.courseid;
  let sectionID = req.params.sectionid;
  let [result, _] = await secMod.deleteSection(courseID, sectionID);
  res.send(result);
});

export {
  defaultController,
  getAllSections,
  addSection,
  updateSection,
  deleteSection,
};
