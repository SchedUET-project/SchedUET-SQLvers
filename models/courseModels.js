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

  static deleteCourse(data) {
    let array = [data];
    return db.execute(q.deleteCourse, array);
  }

  static updateCourse(id, data) {
    let array = [data["courseID"], data["title"], data["credits"], id];
    console.log(array);
    return db.execute(q.updateCourse, array);
  }

  static getCourseById() {}
}

export default accMod;
