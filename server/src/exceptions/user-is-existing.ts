import HttpException from "./http-exception"

export class UserIsExistException extends HttpException {
  constructor() {
    super(409, "User exist")
  }
}
