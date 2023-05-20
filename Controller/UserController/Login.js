import UserModel from "../../Model/UserModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const LoginController = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req?.body?.email })
        if (bcrypt.compare(req?.body?.password, user?.password)) {
            res.status(200).send({
                message: "SuccessFully Login!", data: {
                    user,
                    token: jwt.sign(user._id?.toString(), process.env.JWT_SECRET_KEY)
                }
            })
        } else {
            throw new Error()
        }
    } catch (error) {
        res.status(400).send({ message: "Please Provide Valid Credentials!" })
    }
}
export default LoginController