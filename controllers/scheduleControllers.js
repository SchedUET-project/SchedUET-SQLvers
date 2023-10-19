import schMod from "../models/scheduleModels.js";
import secMod from "../models/sectionModels.js";
import tookMod from "../models/tookModels.js";
import takeMod from "../models/takeModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await schMod.defaultQuery();
  res.json(data);
};

const getSchedulesById = async (req, res, next) => {
  try{
    let id = req.params.id;
    let [data, _] = await schMod.getScheduleById(id);
    res.send(data);
  }catch(error){
    next(error);
  }
};

const getSchedulesByTakes = async (req, res, next) => {
  try{
    let id = req.params.id;
    let [data, _] = await takeMod.getTakesByStudentId(id);
    res.send(data);
  }catch(error){
    next(error);
  }
};

const addSchedule = async (req, res, next) => {
  try{
    let data = req.body;
    data["accountID"] = req.params.id;
    let [result, _] = await schMod.addSchedule(data);
    res.send(result);
  }catch(error){
    next(error);
  }
};

const deleteSchedule = async (req, res, next) => {
  try{
    let data = req.body;
    data["accountID"] = req.params.id;
    let [result, _] = await schMod.deleteSchedule(data);
    res.send(result);
  }catch(error){
    next(error);
  }
};

const getAllSections = async (req, res, next) => {
  try{
    let id = req.params.id;
    let [data, _] = await secMod.getAllSections(id);
    res.send(data);
  }catch(error){
    next(error);
  }
};

export {
  defaultController,
  getAllSections,
  getSchedulesById,
  getSchedulesByTakes,
  addSchedule,
  deleteSchedule,
};
