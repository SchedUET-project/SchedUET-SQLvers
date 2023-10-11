import db from "../config/db.js";
import * as q from "./queries/teacherQueries.js";

class accMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static getAllTeachers() {}
  static updateTeacher() {}
  static addTeacher() {}
  static deleteTeacher() {}
}

export default accMod;
