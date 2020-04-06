import { body } from "express-validator"

export function validateSignUp() {
  return [
    body("login", "login is required")
      .trim()
      .exists()
      .notEmpty(),
    body("pass", "pass is required")
      .exists()
      .notEmpty(),
  ]
}
