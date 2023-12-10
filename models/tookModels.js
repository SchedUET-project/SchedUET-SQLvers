import db from "../config/db.js";
import * as q from "./queries/tookQueries.js";

class accMod {
  static getTook(accountID) {
    return db.query(q.getTook, accountID);
  }
  static addTook() {}
  static deleteTook() {}
}

export default accMod;
