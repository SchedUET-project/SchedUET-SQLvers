const thisUserOnlyMiddleware = (req, res, next) => {
    if (global.account.userID == req.params.id) {
        return next();
    }
    else {
        return next({
            message: "You are not authorized to access this resource",
            errno: 401
        });
    }
}

export default thisUserOnlyMiddleware