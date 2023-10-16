import accMod from "../models/accountModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await accMod.defaultQuery(a);
  res.json(data);
};

const getAllAccounts = async (req, res, next) => {
  res.send("getAllAccounts");
};

const addAccount = async (req, res, next) => {
  res.send("addAccount");
};

const deleteAccount = async (req, res, next) => {
  res.send("deleteAccount");
};

const updateAccount = async (req, res, next) => {
  res.send("updateAccount");
};

export {
  defaultController,
  getAllAccounts,
  addAccount,
  deleteAccount,
  updateAccount,
};
