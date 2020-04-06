import { Api } from "."

export class PostsApi extends Api {
  async fetchPosts() {
    return await fetch(this.url + "/api/user/posts", {
      method: "GET",
      headers: {
        Pragma: "no-cache",
        Authorization: "Bearer " + this.token,
      },
    }).then(r => r.ok && r.json())
  }

  async createPost(post: { title: string; content: string }) {
    return await fetch(this.url + "/api/user/posts/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Pragma: "no-cache",
        Authorization: "Bearer " + this.token,
      },
      body: JSON.stringify(post),
    }).then(r => {
      return r.ok && r.json()
    })
  }

  async removePost(id: number) {
    await fetch(this.url + "/api/user/posts/" + id, {
      method: "DELETE",
      headers: {
        Pragma: "no-cache",
        Authorization: "Bearer " + this.token,
      },
    })
  }
  async updatePost(id: number, post: { title: string; content: string }) {
    return await fetch(this.url + "/api/user/posts/" + id + "/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Pragma: "no-cache",
        Authorization: "Bearer " + this.token,
      },
      body: JSON.stringify(post),
    }).then(r => r.ok && { id, ...post })
  }
}
