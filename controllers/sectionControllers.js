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
  res.send("updateSection");
});

const deleteSection = wrapper(async (req, res, next) => {
  res.send("deleteSection");
});

export {
  defaultController,
  getAllSections,
  addSection,
  updateSection,
  deleteSection,
};
