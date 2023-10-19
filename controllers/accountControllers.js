import { wrapper } from "../middleware/wrapper.js";
import accMod from "../models/accountModels.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await accMod.defaultQuery(a);
  res.json(data);
});

const getAllAccounts = wrapper(async (req, res, next) => {
  res.send("getAllAccounts");
});

const addAccount = wrapper(async (req, res, next) => {
  res.send("addAccount");
});

const deleteAccount = wrapper(async (req, res, next) => {
  res.send("deleteAccount");
});

const updateAccount = wrapper(async (req, res, next) => {
  res.send("updateAccount");
});

export {
  defaultController,
  getAllAccounts,
  addAccount,
  deleteAccount,
  updateAccount,
};
