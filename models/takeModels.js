import db from "../config/db.js";
import * as q from "./queries/registerQueries.js";

class takeMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static getTakesByStudentId() {}

  static addTake() {}

  static deleteTake() {}
}

export default takeMod;
