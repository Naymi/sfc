import { body } from "express-validator"
export function validateLogin() {
  return [
    body("login")
      .trim()
      .exists()
      .notEmpty(),
    body("pass")
      .exists()
      .notEmpty(),
  ]
}
