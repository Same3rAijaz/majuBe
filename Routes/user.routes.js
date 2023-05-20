import { Router } from "express"
import * as User from "../Controller/UserController/index.js"

const router = Router()

router.post('/login', User.login)
router.post('/signup', User.signup)

export default router;