import Post from "../../models/Post.model"
import { Response, Request } from "express"

export default async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req
  const post = await Post.findByPk(id)
  if (post) {
    await post.destroy()
    return res.end()
  }
  res.sendStatus(409).json({
    message: "Пост не найден",
  })
}
