import db from "../config/db.js";
import * as q from "./queries/scheduleQueries.js";

class schMod {
  static defaultQuery() {
    return db.query(q.defaultQuery);
  }
  static getScheduleById(id) {
    return db.execute(q.getScheduleById, [id])
  }

  static addSchedule() {}

  static deleteSchedule() {}
}

export default schMod;
