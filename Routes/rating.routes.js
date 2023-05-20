import { Router } from "express";
import * as Rating from "../Controller/RatingController/index.js"
const router = Router()

router.post('/create', Rating.createRating)
export default router