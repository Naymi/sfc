import HttpException from "./http-exception"

export class IncorrectUserPasswordException extends HttpException {
  constructor() {
    super(401, "Неверный пароль")
  }
}
