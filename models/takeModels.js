import db from "../config/db.js";
import * as q from "./queries/takeQueries.js";

class takeMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static getTakesByStudentId() {}

  static addTake() {}

  static deleteTake() {}
}

export default takeMod;
