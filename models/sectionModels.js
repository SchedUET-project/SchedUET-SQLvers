import db from "../config/db.js";
import * as q from "./queries/sectionQueries.js";

class secMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static addSection() {}
  // This query MUST avoid the section has been taken 
  static getAllSections(id) {
    return db.query(q.getAllSections, [id]);
  }
  static getSectionById() {}
  static updateSection() {}
  static deleteSection() {}
}

export default secMod;
