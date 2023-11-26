import express from "express";

const router = express.Router();

router.route("/").get((req, res, next) => {
  if (!global.account) return res.status(401).send("Please turn back");
  res.status(200).send(global.account);
});

export default router;
