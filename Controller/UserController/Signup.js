import UserModel from "../../Model/UserModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import saveFileToFirebase from "../../Util/SaveImage.js";
const Signup = async (req, res) => {
    try {
        let picture = null
        if (req?.file) {
            picture = await saveFileToFirebase(req?.file)
        }
        const password = await bcrypt.hash(req?.body?.password, 2)
        const user = await new UserModel({ ...req.body, password, picture }).save()
        const token = jwt.sign(user._id?.toString(), process.env.JWT_SECRET_KEY)
        return res.status(200).send({ message: "Success!", data: { user: user, token: token } })
    } catch (error) {
        console.log(error?.message)
        return res.status(400).send({ message: "Bad Request!" })
    }
}

export default Signup