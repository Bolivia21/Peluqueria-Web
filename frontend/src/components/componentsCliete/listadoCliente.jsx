import React from 'react';

const ListadoCliente = ({ lista }) => {

  return (
    <div className="container mt-3">
      <h3>Cliente</h3>
      <table className="table table-striped">
        <thead>
          <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Servicio</th>
          <th>Precio</th>
          <th>FechaNac</th>
          <th>EstadoTurno</th>
          </tr>
        </thead>
        <tbody>
        {lista && lista.map((e, index) => (
            <tr key={index}>
              <td>{e.Id}</td>
              <td>{e.Nombre}</td>
              <td>{e.Servicio}</td>
              <td>{e.Precio}</td>
              <td>{e.FechaNac}</td>
              <td>{e.EstadoTurno}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoCliente
