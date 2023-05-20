import UserModel from "../../Model/UserModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import saveFileToFirebase from "../../Util/SaveImage.js";
const Signup = async (req, res) => {
    try {
        let picture = null
        if (req?.file) {
            picture = await saveFileToFirebase(req?.file)
        }
        const user = new UserModel({ ...req.body, password: bcrypt.hash(req?.body?.password), picture }).save()
        const token = jwt.sign(user._id, process.env.JWT_SECRET_KEY)
        return res.status(200).send({ message: "Success!", data: { user: user, token: token } })
    } catch (error) {
        return res.status(400).send({ message: "Bad Request!" })
    }
}

export default Signup