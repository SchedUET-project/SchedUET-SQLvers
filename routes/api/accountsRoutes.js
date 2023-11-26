import express from "express";
import * as accountController from "../../controllers/accountControllers.js";
import adminOnlyMiddleware from "../../middleware/adminOnly.js"

const router = express.Router();

router
  .route("/")
  .get(adminOnlyMiddleware ,accountController.getAllAccounts)
  .post(adminOnlyMiddleware, accountController.addAccount);

router
  .route("/:id")
  .put(adminOnlyMiddleware, accountController.updateAccount)
  .delete(adminOnlyMiddleware, accountController.deleteAccount);

export default router;
