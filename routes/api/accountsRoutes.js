import express from "express";
import * as accountController from "../../controllers/accountControllers.js";
const router = express.Router();

router
  .route("/")
  .get(accountController.getAllAccounts)
  .post(accountController.addAccount);

router
  .route("/:id")
  .put(accountController.updateAccount)
  .delete(accountController.deleteAccount);

export default router;
