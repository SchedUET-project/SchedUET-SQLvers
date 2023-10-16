import db from "../config/db.js";
import * as q from "./queries/courseQueries.js";

class accMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static getAllCourses() {
    return db.query(q.getAllCourses);
  }
  static addCourse(data) {
    let array = [data["courseID"], data["title"], data["credits"]];
    return db.execute(q.addCourse, array);
  }
  static getCourseById() {}
  static updateCourse() {}
  static deleteCourse() {}
}

export default accMod;
