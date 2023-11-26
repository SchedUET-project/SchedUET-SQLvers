import db from "../config/db.js";
import * as q from "./queries/scheduleQueries.js";

class schMod {

  static getScheduleById(id) {
    return db.query(q.getScheduleById, [id])
  }

  static addSchedule(data) {
    console.log(data);
    let array = [data["accountID"], data["courseID"], data["sectionID"]];
    return db.execute(q.addSchedule, array);
  }

  static deleteSchedule(data) {
    let array = [data["accountID"], data["courseID"], data["sectionID"]];
    return db.execute(q.deleteSchedule, array);
  }
}

export default schMod;
