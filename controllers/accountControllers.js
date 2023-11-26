import { wrapper } from "../middleware/wrapper.js";
import accMod from "../models/accountModels.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await accMod.defaultQuery(a);
  res.json(data);
});

const getAllAccounts = wrapper(async (req, res, next) => {
  let [result, _] = await accMod.getAllAccounts();
  req.data = result;
  next();
});

const addAccount = wrapper(async (req, res, next) => {
  let data = req.body;
  let [result, _] = await accMod.addAccount(data);
  res.send(result);
});

const deleteAccount = wrapper(async (req, res, next) => {
  let data = req.params.id;
  let [result, _] = await accMod.deleteAccount(data);
  res.send(result);
});

const updateAccount = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  let [result, _] = await accMod.updateAccount(id, data);
  res.send(result);
});

export {
  defaultController,
  getAllAccounts,
  addAccount,
  deleteAccount,
  updateAccount,
};
