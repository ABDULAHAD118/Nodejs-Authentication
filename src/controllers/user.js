import User from "../models/user.js";
import { setUser } from '../services/auth.js'

const signup = async (req, res) => {
    const { username, email, address, password, confirmPassword } = req.body;
    //Check that user send all fields
    if (!username || !email || !address || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    //Check that password is same 
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }
    //Find out that username is unique or not
    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
        return res.json({ message: "Username is already used!" })
    }
    //Find out that email is unique or not
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
        return res.json({ message: "Email already used!" });
    }
    //Add data of user in database
    const user = await User.create({
        username: username,
        email: email,
        address: address,
        password: password
    });
    if (user) {
        return res.redirect("/login")
    }
    else {
        return res.status(500).json({ message: 'Registration Failed!' });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    //Check that user send all fields
    if (!username || !password) {
        return res.status(400).json({ message: 'Send All fields!' });
    }
    //Find user with username
    const user = await User.findOne({ username: username });
    if (user) {
        //if username found than match the password
        if (password === user.password) {

            const token = setUser(user);
            res.cookie('token', token);
            return res.redirect("/");
            // return res.json({ message: "Login Successfull", token: token });
        }
        else {
            return res.json({ message: "Incorrect Password" })
        }
    }
    else {
        return res.status(404).json({ message: "User not Found" })
    }
}

export { signup, login };