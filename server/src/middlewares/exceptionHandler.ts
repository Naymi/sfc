import { Response } from "express"
import HttpException from "../exceptions/http-exception"

function exceptionHandler(err: any, _req: any, res: Response, _next: any) {
  if (err instanceof HttpException) {
    res.status(err.status).json(err.toJson())
  } else {
    res.status(500).json({
      message: "Internal Server Error",
      devMessage:
        process.env.NODE_ENV === "production" ? undefined : err.message,
      stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    })
  }
}

export default exceptionHandler
