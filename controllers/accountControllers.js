import { wrapper } from "../middleware/wrapper.js";
import accMod from "../models/accountModels.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await accMod.defaultQuery(a);
  req.data = data
  next();
});

const getAllAccounts = wrapper(async (req, res, next) => {
  let [data, _] = await accMod.getAllAccounts();
  req.data = data;
  next();
});

const addAccount = wrapper(async (req, res, next) => {
  let queryData = req.body;
  let [data, _] = await accMod.addAccount(queryData);
  req.data = data;
  next();
});

const deleteAccount = wrapper(async (req, res, next) => {
  let queryData = req.params.id;
  let [data, _] = await accMod.deleteAccount(queryData);
  req.data = data;
  next();
});

const updateAccount = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let queryData = req.body;
  let [data, _] = await accMod.updateAccount(id, queryData);
  req.data = data;
  next();
});

export {
  defaultController,
  getAllAccounts,
  addAccount,
  deleteAccount,
  updateAccount,
};
