import { Sequelize } from "sequelize-typescript"

export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? +process.env.DB_PORT : undefined,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  models: [__dirname + "/../models/*.model.ts"],
  define: {
    timestamps: false,
  },
})
