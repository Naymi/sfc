export class Api {
  url!: string
  constructor(
    url: string = process.env.REACT_APP_API_URL || "",
    token?: string,
  ) {
    this.url = url
    if (token) this.token = token
  }
  get token(): string {
    return localStorage.getItem("token") || ""
  }
  set token(token) {
    localStorage.setItem("token", token)
  }
}
