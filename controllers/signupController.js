import CryptoJS from "crypto-js";
import User from "../model/user.model.js";


const  signupHandler = async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        if (error.code === 11000) {
            if (error.keyValue.number) {
                res.status(400).json({ message: "Number already exists" });
            } else if (error.keyValue.email) {
                res.status(400).json({ message: "Email already exists" });
            } else {
                res.status(400).json({ message: "Duplicate field error" });
            }
        } else {
            res.status(500).json({ message: "Error creating a user" });
        }
        console.log(error);
    }
}
export default signupHandler