import db from "../config/db.js";
import * as q from "./queries/accountQueries.js";

class accMod {
  static defaultQuery(x,) {
    return db.query(q.defaultQuery);
  }

  static addAccount() {}
  static getAllAccounts() {}
  static updateAccount() {}
  static deleteAccount() {}
}

export default accMod;
