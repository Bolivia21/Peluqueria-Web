import { Sequelize } from "sequelize";
import ClienteModel from "./cliente.js";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage:"./.data/peluqueria.db",
    logging: false
})

sequelize.define(
    'Cliente',
    ClienteModel.ClienteAttributtes,
    ClienteModel.ClienteOptions
)


export default sequelize