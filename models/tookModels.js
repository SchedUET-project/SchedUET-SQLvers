import db from "../config/db.js";
import * as q from "./queries/tookQueries.js";

class accMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
  
  static addTook() {}
  static deleteTook() {}
}

export default accMod;
