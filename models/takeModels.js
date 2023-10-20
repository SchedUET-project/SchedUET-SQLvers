import db from "../config/db.js";
import * as q from "./queries/takeQueries.js";

class takeMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }

  static getTakesByStudentId(id) {
    return db.query(q.getTakesByStudentId, [id]);
  }

  static addTake(data) {
    let array = [data["accountID"], data["courseID"], data["sectionID"]];
    return db.execute(q.addTake, array);
  }

  static deleteTake(data) {
    let array = [data["accountID"], data["courseID"], data["sectionID"]];
    return db.execute(q.deleteTake, array);
  }
}

export default takeMod;
