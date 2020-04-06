import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import User from "../models/User.model"
import { UnauthorizedException } from "../exceptions/unauthorized-exception"
import postsRouter from "./posts"

const userRouter = Router()

userRouter.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const user =
      // @ts-ignore
      await User.findByPk(req.user.id, {
        attributes: ["login", "id"],
      })
    if (user) {
      return res.json(user)
    }
    throw new UnauthorizedException()
  }),
)

userRouter.use("/posts", postsRouter)

export default userRouter
