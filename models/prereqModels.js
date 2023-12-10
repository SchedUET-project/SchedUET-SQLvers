import db from "../config/db.js";
import * as q from "./queries/prereqQueries.js";

class accMod {
  static addPreReq() {}

  static getPreReqOfCourse(courseID) {
    return db.query(q.getPreReqOfCourse, courseID);
  }

  static deletePreReq() {}
}

export default accMod;
