import { DataTypes } from "sequelize";

const ClienteAttributtes = {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty:{
                args:true,
                msg: "Ingrese un nombre porfavor"
            }
        }
    },
    Servicio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty:{
                args:true,
                msg: "Ingrese un servicio porfavor"
            }
        }
    },
    Precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty:{
                args:true,
                msg: "Ingrese un Precio porfavor"
            }
        }
    },
    FechaNac: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty:{
                args:true,
                msg: "Ingrese una Fecha de Nacimiento porfavor"
            }
        }
    },
    EstadoTurno: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty:{
                args:true,
                msg: "Ingrese un nombre porfavor"
            }
        }
    }
}

const ClienteOptions = {
    timestamps: false
}

const ClienteModel = {
    ClienteAttributtes,
    ClienteOptions
}

export default ClienteModel