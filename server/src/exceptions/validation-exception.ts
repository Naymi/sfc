import HttpException from "./http-exception"

class ValidationException extends HttpException {
  public errors: any[]

  constructor(errors: any[]) {
    super(422, "Request has validation errors.")
    this.errors = errors
  }

  toJson(): any {
    return {
      message: this.message,
      errors: this.errors,
    }
  }
}

export default ValidationException
