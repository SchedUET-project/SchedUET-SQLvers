import db from "../config/db.js";
import * as q from "./queries/registerQueries.js"

class takeMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
}

export default takeMod;