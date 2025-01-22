import jwt from 'jsonwebtoken';
import 'dotenv/config'
const secret = process.env.JWT_SECRET;
const setUser = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
    }
    return jwt.sign(payload, secret);
}

const getUser = (token) => {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

export { setUser, getUser }