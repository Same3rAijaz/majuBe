import { Router } from "express";
import * as Order from "../Controller/OrderController/index.js"
import JWTVerify from "../Middleware/JWTverify.js";
const router = Router()

router.post('/create', JWTVerify, Order.createOrder)
router.get('/', JWTVerify, Order.getOrder)

export default router