import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()
const JWTVerify = async (req, res, next) => {
    try {
        const token = await req?.headers['authorization']?.split(" ")[1]
        if (token && jwt.verify(token, process.env.JWT_SECRET_KEY)) {
            const decoded_token = jwt.decode(token)
            req.body.user_id = decoded_token?.id
            next()
        } else {
            throw new Error("Please Provide Authentication Token!")
        }
    } catch (error) {
        res.status(400).send({ error: error, message: error?.message })
    }
}

export default JWTVerify