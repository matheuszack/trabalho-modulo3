import { useEffect, useState } from "react"
import academicFetch from "../axios/config"
import './Edit.css'
import { Link, useParams, useNavigate } from "react-router-dom"


import './Edit.css'


function Edit() {
  const [cliente, setCliente] = useState()

  const [nome, setNome] = useState()
  const [sobrenome, setSobrenome] = useState()
  const [senha, setSenha] = useState()
  const [email, setEmail] = useState()
  const [idade, setIdade] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [objetivo, setObjetivo] = useState()
  const [nomePlano, setNomePlano] = useState()


  const { id } = useParams()
  const navigate = useNavigate()

  const info = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: senha,
    idade: `${idade} anos`,
    peso: `${peso}kg`,
    altura: `${altura}`,
    objetivo: objetivo,
    nomePlano: nomePlano
  }


  const editClient = async (e) => {
    e.preventDefault()

    
    await academicFetch.put(`/clientes/${id}`,info)
    .catch((err)=> console.log(`nome do erro: ${err}`))
    setClient(client.filter(client => client.id !== id))
    navigate("/dadosclientes")
  }

  const getClient = async()=>{
    await academicFetch.get(`/clientes`)
    .then((response) => setCliente(response.data))
  }


  useEffect(()=>{
    editClient()
    getClient()
  },[])
  

  return (
    <div className="new_client_edit">
      <p className="titulo_cadastro_edit">Editar Dados</p>
      <form className="form_cadastro_edit" onSubmit={(e)=> editClient(e)}>
        <div className="form_control_edit">
          <label htmlFor="nome">Nome:</label>
          <input type="text" 
          name="nome" 
          id="nome" 
          required
          placeholder="Nome"
          onChange={(e)=> setNome(e.target.value)}/>
        </div>

        <div className="form_control_edit">
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input type="text" 
          name="sobrenome" 
          required
          id="sobrenome" 
          placeholder="Sobrenome"
          value={sobrenome}
          className="input_form_control"
          onChange={(e)=> setSobrenome(e.target.value)}/>
        </div>
        <div className="form_control_edit">
          <label htmlFor="email">E-mail:</label>
          <input type="email" 
          name="email" 
          required
          id="email" 
          placeholder="email"
          value={email}
          className="input_form_control"
          onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div className="form_control_edit">
          <label htmlFor="password">Senha:</label>
          <input type="text" 
          name="password" 
          required
          id="password" 
          placeholder="********"
          value={senha}
          onChange={(e)=> setSenha(e.target.value)}/>
        </div>

        
        <div className="form_control_edit">
            <label htmlFor="idade">Idade:</label>
            <input type="number"
            name="idade"
            required
            id="idade"
            placeholder="Idade"
            value={idade}
            onChange={(e)=> setIdade(e.target.value)}/>
        </div>

        <div className="form_control_edit">
            <label htmlFor="peso">Peso:</label>
            <input type="number"
            name="peso"
            required
            id="peso"
            placeholder="Peso"
            value={peso}
            onChange={(e)=> setPeso(e.target.value)}/>
        </div>

        <div className="form_control_edit">
            <label htmlFor="altura">Altura:</label>
            <input type="text"
            name="altura"
            required
            id="altura"
            placeholder="Altura"
            value={altura}
            onChange={(e)=> setAltura(e.target.value)}/>
        </div>

        <div className="form_control_edit">
            <label htmlFor="objetivo">Objetivo:</label>
            <input type="text"
            name="objetivo"
            required
            id="objetivo"
            placeholder="Objetivo na academia"
            value={objetivo}
            onChange={(e)=> setObjetivo(e.target.value)}/>
        </div>

        <div className="form_control_edit">
            <label htmlFor="plano">Plano:</label>
            <select
            name="plano"
            required
            id="plano"
            value={nomePlano}
            onChange={(e)=> setNomePlano(e.target.value)}>

              <option selected disabled>Escolha seu Plano</option>
              <option>Básico</option>
              <option>Padrão</option>
              <option>Premium</option>
            </select>
        </div>
        <div className="break"></div>
          <Link to={`/dadosclientes`}>
            <input type="button" className="btn_voltar_edit" value="Voltar"/>
          </Link>
          <input type="submit" className="btn_cadastro_edit" value="Atualizar"/>
      </form>
    </div>
  )
}

export default Edit