import { validationResult } from "express-validator"
import { Request, Response } from "express"
import ValidationException from "../exceptions/validation-exception"

function checkValidationErrors(req: Request, res: Response, next: any) {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    next()
  } else {
    next(new ValidationException(errors.array()))
  }
}

export default checkValidationErrors
