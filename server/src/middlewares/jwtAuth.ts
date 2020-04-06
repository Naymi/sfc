import * as jwt from "jsonwebtoken"
import { UnauthorizedException } from "../exceptions/unauthorized-exception"
import { Request } from "express"

function jwtAuth(req: Request & { userId: number }, res: any, next: any) {
  const authorization = req.header("Authorization")

  if (authorization) {
    const [method, token] = authorization.split(" ")
    if (method === "Bearer" && token) {
      const { id } = jwt.verify(token, process.env.APP_SECRET!) as any

      if (id) {
        req.userId = id
        return next()
      }
    }
  }

  throw new UnauthorizedException()
}

export default jwtAuth
