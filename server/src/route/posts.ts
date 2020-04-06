import { Router } from "express"
import create from "../controllers/posts/create"
import read from "../controllers/posts/read"
import update from "../controllers/posts/update"
import deletePost from "../controllers/posts/delete"
import expressAsyncHandler from "express-async-handler"

const postsRouter = Router()

postsRouter.get("/", expressAsyncHandler(read))
postsRouter.put("/", expressAsyncHandler(create))
postsRouter.post("/:id/update", expressAsyncHandler(update))
postsRouter.delete("/:id", expressAsyncHandler(deletePost))

export default postsRouter
