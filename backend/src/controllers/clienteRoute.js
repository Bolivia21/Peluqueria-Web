import express from 'express';
const router = express.Router();

import sequelize from '../models/database.js';
import {Op, ValidationError} from 'sequelize'

//mostrar todos los cliente
router.get("/api/cliente", async function (req, res, next) {
  let filtro = req.query.filtro;
  let whereCondicion = {};

  if (filtro) {
      whereCondicion.Nombre = { [Op.like]: `${filtro}%` }
  }

  let data = await sequelize.models.Cliente.findAll({
      where: whereCondicion
  });
  res.json(data)
});


//agregar un cliente
router.post("/api/cliente", async (req, res) => {
    try {
      let data = await sequelize.models.Cliente.create({
        Nombre: req.body.Nombre,
        Servicio: req.body.Servicio,
        Precio: req.body.Precio,
        FechaNac: req.body.FechaNac,
        EstadoTurno: req.body.EstadoTurno

      });
      res.status(200).json(data.dataValues); // devolvemos la categoria agregada!
    } catch (err) {
      if (err instanceof ValidationError) {
        // si son errores de validacion, los devolvemos
        let messages = '';
        err.errors.forEach((x) => messages += (x.path ?? 'campo') + ": " + x.message + '\n');
        res.status(400).json({message : messages});
      } else {
        // si son errores desconocidos
        throw err;
      }
    }
  });

  //modificar una categoria

  router.put("/api/cliente/:nombre", async (req, res) => {
    try {
      let resultado = await sequelize.models.Cliente.findOne({
        attributes: [
          "Id",
          "Nombre",
          "Servicio",
          "Precio",
          "FechaNac",
          "EstadoTurno"
        ],
        where: { Nombre: req.params.nombre},
      });
      if (!resultado) {
        res.status(404).json({ message: "Nombre no encontrado" });
        return;
      }
      resultado.Servicio = req.body.Servicio;
      resultado.Precio = req.body.Precio;
      resultado.FechaNac = req.body.FechaNac;
      resultado.EstadoTurno = req.body.EstadoTurno
      await resultado.save();
      res.sendStatus(200);
    } catch (err) {
      if (err instanceof ValidationError) {
        // si son errores de validacion, los devolvemos
        let messages = '';
        err.errors.forEach((x) => messages += x.path + ": " + x.message + '\n');
        res.status(400).json({message : messages});
      } else {
        // si son errores desconocidos
        throw err;
      }
    }
  });

  //borrado fisico de una categoria
  router.delete("/api/cliente/:nombre", async (req, res) => {
    // baja fisica
    let filasBorradas = await sequelize.models.Cliente.destroy({
        where: { Id: req.params.nombre },
    });
    if (filasBorradas == 1) res.sendStatus(200);
    else res.sendStatus(404);
});

  


export default router;
