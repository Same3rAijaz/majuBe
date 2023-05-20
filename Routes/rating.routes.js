import { Router } from "express";
import * as Rating from "../Controller/RatingController/index.js"
import JWTVerify from "../Middleware/JWTverify.js";
const router = Router()

router.post('/create', JWTVerify, Rating.createRating)
export default router