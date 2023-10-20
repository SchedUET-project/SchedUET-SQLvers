import db from "../config/db.js";
import * as q from "./queries/teacherQueries.js";

class accMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static getAllTeachers() {
    return db.execute(q.getAllTeachers);
  }
  static addTeacher(data) {
    let array = [data["teacherID"], data["name"], data["email"], data["faculty"], data["role"]];
    return db.execute(q.addTeacher, array);
  }
  static updateTeacher() {}
  static deleteTeacher() {}
}

export default accMod;
