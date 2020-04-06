import { Request, Response } from "express"

export async function logout(req: Request, res: Response) {
  res.clearCookie("token")
  res.sendStatus(200)
}
