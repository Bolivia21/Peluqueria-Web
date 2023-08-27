import httpService from "./httpService.js";

const getClienteByFilters = async (url) => {
    const resultado = await httpService.get(url);
    return resultado.data
}

const postCliente = async (url, cliente) => {
    await httpService.post(url, cliente)
}

const putCliente = async (url, cliente) => {
    await httpService.put(url, cliente)
}

const deleteCliente = async (url) => {
    await httpService.delete(url)
}

const clienteService = {
    getClienteByFilters,
    postCliente,
    putCliente,
    deleteCliente  
}

export default clienteService