import { getUser } from "../services/auth.js";

const restrictToLoggedinUserOnly = async (req, res, next) => {
    const userId = req.cookies?.token;
    if (!userId) {
        return res.redirect('/login')
    }
    const user = await getUser(userId);
    if (user) {
        req.user = user;
        next();
    }
    else {
        return res.redirect('/login')
    }
}

const checkAuth = (req, res, next) => {
    const userId = req.cookies?.token;
    const user = getUser(userId);
    req.user = user;
    next();
}


export { restrictToLoggedinUserOnly, checkAuth }