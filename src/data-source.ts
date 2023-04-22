import "reflect-metadata"
import { DataSource } from "typeorm"
import { FormEntity } from "./entities/forma"
import { CategoryEntity } from "./entities/category"
import { ProductsEntity } from "./entities/products"
import { ImagesEntity } from "./entities/images"
import { GaleryEntity } from "./entities/galery"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "DJ9USbp%iLou",
    database: "solar_b",
    synchronize: true,
    logging: false,
    entities: [FormEntity,CategoryEntity,ProductsEntity,ImagesEntity,GaleryEntity],
    migrations: [],
    subscribers: [],
})
