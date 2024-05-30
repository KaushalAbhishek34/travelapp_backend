import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const loginHandler = async (req, res) => {
    try {
        const user = await User.findOne({ number: req.body.number });
        if (!user) {
            return res.status(401).json({ message: "Incorrect Mobile Number" });
        }

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        if (decryptedPassword !== req.body.password) {
            return res.status(401).json({ message: "Incorrect Password" });
        }
        const {password, ...rest} = user._doc
        const accessToken = jwt.sign({ username: user.username} , process.env.ACCESS_TOKEN)


        res.json({...rest , accessToken});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export default loginHandler;