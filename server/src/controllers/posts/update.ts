import { Response, Request } from "express"
import Post from "../../models/Post.model"
import HttpException from "../../exceptions/http-exception"

export default async (req: Request, res: Response) => {
  const {
    userId,
    params: { id },
    body: { content, title },
  } = req

  const post = await Post.findOne({ where: { id, userId } })
  if (post) {
    post.update({
      content,
      title,
    })
    return res.end("OK")
  }
  throw new HttpException(404, "Пост не найден")
}
