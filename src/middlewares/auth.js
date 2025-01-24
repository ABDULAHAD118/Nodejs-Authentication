import { getUser } from "../services/auth.js";

const restrictToLoggedinUserOnly = async (req, res, next) => {
    // const userId = req.cookies?.token;
    const userId = req.headers['authorization'];
    const token = userId.split('Bearer ')[1];
    if (!userId || !token) {
        return res.redirect('/login')
    }
    // const user = await getUser(userId);
    const user = await getUser(token);
    if (user) {
        req.user = user;
        next();
    }
    else {
        return res.redirect('/login')
    }
}

const checkAuth = (req, res, next) => {
    // const userId = req.cookies?.token;
    // const user = getUser(userId);
    const userId = req.headers['authorization'];
    const token = userId.split('Bearer ')[1];

    const user = getUser(token);
    req.user = user;
    next();
}


export { restrictToLoggedinUserOnly, checkAuth }