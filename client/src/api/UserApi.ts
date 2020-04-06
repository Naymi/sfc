import { Api } from "."
import { IUser } from "../redux/slices/user"

export class UserApi extends Api {
  async login(user: { login: string; pass: string }): Promise<IUser> {
    return await fetch(this.url + "/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(async r => {
        const json = await r.json()
        if (r.ok) return json

        throw new Error(json.message)
      })
      .then(({ user, token }) => {
        this.token = token
        return user
      })
  }

  async logout() {
    await fetch(this.url + "/api/auth/logout", {
      method: "POST",
      headers: {
        Authorization: this.token,
      },
    })
  }

  async signUp(user: { login: string; pass: string; name: string }) {
    await fetch(this.url + "/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
  }

  async checkLogin() {
    return await fetch(this.url + "/api/user/", {
      headers: {
        Pragma: "no-cache",
        Authorization: "Bearer " + this.token,
      },
    }).then(r => {
      if (r.ok) return r.json()
      localStorage.removeItem("token")
      return false
    })
  }
}
