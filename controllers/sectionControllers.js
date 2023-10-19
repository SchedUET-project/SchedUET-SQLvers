import { wrapper } from "../middleware/wrapper.js";
import secMod from "../models/sectionModels.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await secMod.defaultQuery();
  res.json(data);
});

const getAllSections = wrapper(async (req, res, next) => {
  res.send("getAllSections");
});

const addSection = wrapper(async (req, res, next) => {
  res.send("addSection");
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
