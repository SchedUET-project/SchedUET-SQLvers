import sessionStorage from "node-sessionstorage"

const authenticateMiddleware = (req, res, next) => {
  let accountJSON = sessionStorage.getItem("user");
  if (accountJSON) {
    global.account = JSON.parse(accountJSON);
    next();
  } else {
    delete global.account;
    return res.status(401).json({errMessage: "not logged in!"});
  }
  
};


export default authenticateMiddleware;