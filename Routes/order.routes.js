import { Router } from "express";
import * as Order from "../Controller/OrderController/index.js"
const router = Router()

router.post('/create', Order.createOrder)
router.get('/get', Order.getOrder)

export default router