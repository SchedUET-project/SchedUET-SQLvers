import secMod from "../models/sectionModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await secMod.defaultQuery();
  res.json(data);
};

const getAllSections = async (req, res, next) => {
  res.send("getAllSections");
};

const addSection = async (req, res, next) => {
  res.send("addSection");
};

const updateSection = async (req, res, next) => {
  res.send("updateSection");
};

const deleteSection = async (req, res, next) => {
  res.send("deleteSection");
};

export {
  defaultController,
  getAllSections,
  addSection,
  updateSection,
  deleteSection,
};
