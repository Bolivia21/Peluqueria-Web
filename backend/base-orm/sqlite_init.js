import db from "aa-sqlite";

async function CrearBaseSiNoExiste() {
    // Abrir base, si no existe la crea.
    await db.open("../.data/peluqueria.db")

    let existe = false;
    let res = null;

    // Por cada tabla se hace el siguiente proceso.
    // Tabla PEDIDOS

    // Aca consultamos si la tabla Pedidos tiene mas de 0 registros.
    res = await db.get(
        "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Cliente'",
        []
    );
    if (res.contar > 0) existe = true;
    if (!existe) {
        // Creacion de la tabla porque no existe.
        await db.run(
            `CREATE TABLE IF NOT EXISTS 'Cliente' 
            ('Id' INTEGER NOT NULL, 
            'Nombre' STRING NOT NULL, 
            'Servicio' VARCHAR(15) NOT NULL, 
            'Precio' INTEGER NOT NULL,
            'FechaNac' DATE NOT NULL, 
            'EstadoTurno' INTEGER NOT NULL, 

            PRIMARY KEY('Id' AUTOINCREMENT) );`
        );
        console.log('Tabla Cliente creada.');


    }
    db.close();
}



//CrearBaseSiNoExiste();

export default CrearBaseSiNoExiste