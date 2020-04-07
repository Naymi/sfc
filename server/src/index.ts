import express from "express"
import cors from "cors"
import authRouter from "./route/auth"
import exceptionHandler from "./middlewares/exceptionHandler"
import userRouter from "./route/user"
import jwtAuth from "./middlewares/jwtAuth"
import { sequelize } from "./db"
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use(jwtAuth)
app.use("/api/user", userRouter)
app.use(exceptionHandler)
sequelize
  .sync()
  .then(() =>
    app.listen(process.env.APP_PORT, () =>
      console.log(`server started at http://localhost:${process.env.APP_PORT}`),
    ),
  )
