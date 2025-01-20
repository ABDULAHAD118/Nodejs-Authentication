import User from "../models/user.js";
import ToDo from "../models/to-do.js";

const signup = async (req, res) => {
    const { username, email, address, password, confirmPassword } = req.body;
    if (!username || !email || !address || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const user = await User.create({
        username: username,
        email: email,
        address: address,
        password: password
    });
    if (user) {
        return res.redirect("/")
    }
    else {
        return res.status(500).json({ message: 'Registration Failed!' });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Send All fields!' });
    }
    const user = await User.findOne({ username: username });
    if (user) {
        if (password === user.password) {
            const todos = await ToDo.find();
            return res.render("ToDo", { todos })
        }
        else {
            return res.json({ message: "Incorrect Password" })
        }
    }
    else {
        return res.json({ message: "User not Found" })
    }
}

export { signup, login };