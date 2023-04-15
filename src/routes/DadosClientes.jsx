import academicFetch from "../axios/config"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import './DadosClientes.css'



const DadosCliente = () => {

  const [client, setClient] = useState([])
  
  const { id } = useParams()

  const getClientes = async() =>{
    try {

      const response = await academicFetch.get('/clientes')

      const data = response.data
      setClient(data)

    } catch (error) {
      console.log(error)
    }
  }


  const deleteCliente = async (id) => {

    await academicFetch.delete(`clientes/${id}`)
    .catch((err)=> console.log(`nome do erro: ${err}`))
    setClient(client.filter(client => client.id !== id))
    
  }

  useEffect(()=>{
    getClientes()
    deleteCliente()
  }, [])

  return (
    <div>
      <h1 className="tituloDados">Últimos Cadastros</h1>
      <div className="containerClientes">
        <div className="dadosClientes">
          {client.length === 0 ? (<p>Carregando...</p>) : (
            client.map((clients)=> (
            <div>
              <div className="cliente" key={clients.id}>
                <h2>{clients.nome} {clients.sobrenome}</h2>
                <ul>
                  <li><span>E-mail:</span> {clients.email}</li>
                  <li><span>Objetivo:</span> {clients.objetivo}</li>
                  <li><span>Idade:</span> {clients.idade}</li>
                  <li><span>Peso:</span> {clients.peso}</li>
                  <li><span>Altura: </span>{clients.altura}</li>
                  
                  <li><span>Plano:</span> {clients.nomePlano}</li>
              
                </ul>
                <div className="containerBtnCliente">
                  <button className="btnClienteDelete" onClick={()=> deleteCliente(clients.id)}>Deletar</button>
                  <Link to={{ pathname: `/editardados/${clients.id}`}} className="btnCliente">Editar</Link>
                </div>
                  
              </div>
            </div>
            ))
          ) }
        </div>
      </div>
    </div>
  )
}

export default DadosCliente