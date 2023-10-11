import db from "../config/db.js";
import * as q from "./queries/courseQueries.js";

class accMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static addCourse() {}
  static getAllCourses() {}
  static getCourseById() {}
  static updateCourse() {}
  static deleteCourse() {}
}

export default accMod;
