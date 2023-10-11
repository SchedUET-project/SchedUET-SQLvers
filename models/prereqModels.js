import db from "../config/db.js";
import * as q from "./queries/prereqQueries.js";

class accMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static addPreReq() {}

  static getPreReqOfCourse() {}

  static deletePreReq() {}
}

export default accMod;
