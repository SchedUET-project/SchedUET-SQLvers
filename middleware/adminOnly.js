const adminOnlyMiddleware = (req, res, next) => {
    if (global.account.isAdmin == 1) {
        return next();
    }
    else {
        return next({
            message: "You are not authorized to access this resource",
            errno: 401
        });
    }
}

export default adminOnlyMiddleware