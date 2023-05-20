// Importing Dependencies
import { Router } from "express";
import * as Resturant from "../Controller/ResturantController/index.js"
// Declearing Router
const router = Router()

// Decalearing Routes
router.post('/create', Resturant.createResturant)
router.get('/', Resturant.getAllResturant)


export default router;