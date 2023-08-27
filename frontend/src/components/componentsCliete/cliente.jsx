import React, { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import clienteService from '../../services/clienteService.js';
import ListadoCliente from './listadoCliente.jsx';

const Cliente = () => {
  const [lista, setLista] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const traerCliente = async () => {
      const url = "http://localhost:3001/api/cliente"
      const resultado = await clienteService.getClienteByFilters(url)
      setLista(resultado)
    }
    traerCliente()
  }, [])

  const onSubmit = async (data) => {
    console.log(data.filtro)
    const url = `http://localhost:3001/api/cliente?filtro=${data.filtro}`
    const resultado = await clienteService.getClienteByFilters(url)
    console.log(url)
    setLista(resultado)
  };

  return (
    <div className="container">
      <h1>Formulario de Búsqueda</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Filtro:</label>
              <input type="text" placeholder='Nombre' className="form-control" {...register('filtro')} />
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      <ListadoCliente lista={lista} />
    </div>
  );
};

export default Cliente;