import db from "../config/db.js";
import * as q from "./queries/sectionQueries.js";

class secMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static addSection(data) {
    let array = [
      data["courseID"],
      data["sectionID"],
      data["location"],
      data["day"],
      data["start"],
      data["end"],
      data["teacherID"],
      data["capacity"],
    ];
    return db.execute(q.addSection, array);
  }
  // This query MUST avoid the section has been taken
  static getAllSections(id) {
    return db.query(q.getAllSections, [id]);
  }
  static deleteSection(courseID, sectionID) {
    let array = [courseID, sectionID];
    return db.execute(q.deleteSection, array);
  }
  static updateSection(courseID, sectionID, data) {
    let array = [
      data["courseID"],
      data["sectionID"],
      data["location"],
      data["day"],
      data["start"],
      data["end"],
      data["teacherID"],
      data["capacity"],
      courseID,
      sectionID,
    ];
    return db.execute(q.updateSection, array);
  }
  static getSectionById() {}
}

export default secMod;
