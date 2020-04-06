class HttpException extends Error {
  public status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }

  public toJson(): any {
    return {
      message: this.message,
    }
  }
}

export default HttpException
