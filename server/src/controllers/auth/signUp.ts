import { Request, Response } from "express"
import User from "../../models/User.model"
import { hashPassword } from "../../utils/hashPass"
import { UserIsExistException } from "../../exceptions/user-is-existing"
export async function signUp(req: Request, res: Response) {
  await User.create({
    login: req.body.login,
    name: req.body.name,
    pass: hashPassword(req.body.pass),
  }).catch(() => {
    throw new UserIsExistException()
  })

  res.sendStatus(200)
}
