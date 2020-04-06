import { Router } from "express"
import asyncHandler from "express-async-handler"
import { validateLogin } from "../controllers/auth/validateLogin"
import checkValidationErrors from "../middlewares/checkValidationErrors"
import { login } from "../controllers/auth/login"
import { logout } from "../controllers/auth/logout"
import { validateSignUp } from "../controllers/auth/validateSignUp"
import { signUp } from "../controllers/auth/signUp"

const authRouter = Router()

authRouter.post(
  "/login",
  validateLogin(),
  checkValidationErrors,
  asyncHandler(login),
)
authRouter.post("/logout", logout)
authRouter.post(
  "/sign-up",
  validateSignUp(),
  checkValidationErrors,
  asyncHandler(signUp),
)

export default authRouter
