import db from "../config/db.js";
import * as q from "./queries/sectionQueries.js";

class secMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static addSection() {}
  static getAllSections() {}
  static getSectionById() {}
  static updateSection() {}
  static deleteSection() {}
}

export default secMod;
