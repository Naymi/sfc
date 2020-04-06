import { Request, Response } from "express"
import User from "../../models/User.model"
import * as jwt from "jsonwebtoken"
import { hashPassword } from "../../utils/hashPass"
import { UserNotFoundException } from "../../exceptions/user-not-found"
import { IncorrectUserPasswordException } from "../../exceptions/incorrect-user-password"

export async function login(req: Request, res: Response) {
  const { login, pass } = req.body

  const user = await User.findOne({
    where: {
      login,
    },
    raw: true,
  })

  if (!user) {
    throw new UserNotFoundException()
  }
  if (user.pass !== hashPassword(pass)) {
    throw new IncorrectUserPasswordException()
  }

  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET!)

  const { id, pass: _, ...responseUser } = user

  res.json({
    user: responseUser,
    token,
  })
}
