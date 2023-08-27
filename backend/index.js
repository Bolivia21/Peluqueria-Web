import express from 'express'
import CrearBaseSiNoExiste from './base-orm/sqlite_init.js'
import clienteRouter from './src/controllers/clienteRoute.js'
const app = express()

app.use(express.json())

app.use(clienteRouter)
//
const port = 3001
app.listen(port, ()=>{
    console.log(`Sitio escuchando en el puerto${port}`)
})