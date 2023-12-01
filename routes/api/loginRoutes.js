import express from "express";
import db from "../../config/db.js";
import sessionStorage from "node-sessionstorage";

const router = express.Router();
router.use(express.json());

router
  .route("/")
  // .get((req, res, next) => {
  //   throw new Error("something's wrong")
  //   const form =
  //     '<h1>Login Page</h1><form method="POST" action="/login">\
  //     Enter Username:<br><input type="text" name="userID">\
  //     <br>Enter Password:<br><input type="password" name="password">\
  //     <br><br><input type="submit" value="Submit"></form>';

  //   res.send(form);
  // })
  .post(async (req, res) => {
    console.log([req.body.userID, req.body.password]);
    let queryForIDAndPassWord =
      "SELECT userID, password, isAdmin FROM accounts WHERE userID = ? AND password = ?;";
    const [result, _] = await db.query(queryForIDAndPassWord, [req.body.userID, req.body.password]);
    
    const hasData = result.length > 0;
    const userData = result[0];

    if (!hasData) {
      sessionStorage.removeItem("user");
      delete global.account;
      return res.status(401).json({loggedIn: 0});
    } else {
      let accountJSON = JSON.stringify(userData);
      sessionStorage.setItem("user", accountJSON);
      global.account = JSON.parse(accountJSON);
      return res.status(200).json({ loggedIn: 1});
    } 
  });

export default router;
