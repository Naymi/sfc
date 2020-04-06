import { Response, Request } from "express"
import Post from "../../models/Post.model"

export default async (req: Request, res: Response) => {
  const { userId } = req
  const {
    body: { content, title },
  } = req
  res.status(201).json(
    await Post.create({
      title,
      content,
      userId,
    }),
  )
}
