import { Response, Request } from "express"
import Post from "../../models/Post.model"

export default async (req: Request, res: Response) => {
  console.log("posts")
  console.log(req.userId)
  const posts = await Post.findAll({
    where: {
      userId: req.userId,
    },
    raw: true,
  })
  res.json(posts).end()
}
