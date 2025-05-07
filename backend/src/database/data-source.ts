import { DataSource } from "typeorm"
import { Artigo } from "../entities/Artigo"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "",
  password: "",
  database: "Artigos",
  synchronize: false,
  logging: false,
  entities: [Artigo],
  migrations: [],
  subscribers: ["scr/database/migrations/*.ts"],
})
