import db from "../config/db.js";
import * as q from "./queries/accountQueries.js";

class accMod {

  static addAccount(data) {
    let array = [data["userID"], data["password"], data["isAdmin"]];
    return db.execute(q.addAccount, array);
  }
  static getAllAccounts() {
    return db.execute(q.getAllAccounts);
  }
  static updateAccount(id, data) {
    let array = [data["userID"], data["password"], data["isAdmin"], id];
    return db.execute(q.updateAccount, array);
  }
  static deleteAccount(data) {
    let array = [data];
    return db.execute(q.deleteAccount, array);
  }
}

export default accMod;
