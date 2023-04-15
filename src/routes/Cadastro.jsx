import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import academicFetch from '../axios/config'
import './Cadastro.css'


function Cadastro(){
  const navigate = useNavigate()
  
  const [nome, setNome] = useState()
  const [sobrenome, setSobrenome] = useState()
  const [senha, setSenha] = useState()
  const [email, setEmail] = useState()
  const [idade, setIdade] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [objetivo, setObjetivo] = useState()
  const [nomePlano, setNomePlano] = useState()

  const createClient = async (e) => {
    e.preventDefault()

    
    await academicFetch.post("/clientes", {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
      idade: `${idade} anos`,
      peso: `${peso}kg`,
      altura: `${altura}`,
      objetivo: objetivo,
      nomePlano: nomePlano
    })
    .catch((err)=> console.log(err))
    
    navigate("/login")
  }
  

  return (
    <div className="new_client">
      <p className="titulo_cadastro">Cadastrar</p>
      <form className="form_cadastro" onSubmit={(e)=> createClient(e)}>
        <div className="form_control">
          <label htmlFor="nome">Nome:</label>
          <input type="text" 
          name="nome" 
          id="nome" 
          required
          placeholder="Nome"
          onChange={(e)=> setNome(e.target.value)}/>
        </div>

        <div className="form_control">
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input type="text" 
          name="sobrenome" 
          required
          id="sobrenome" 
          placeholder="Sobrenome"
          className="input_form_control"
          onChange={(e)=> setSobrenome(e.target.value)}/>
        </div>
        <div className="form_control">
          <label htmlFor="email">E-mail:</label>
          <input type="email" 
          name="email" 
          required
          id="email" 
          placeholder="email"
          className="input_form_control"
          onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div className="form_control">
          <label htmlFor="password">Senha:</label>
          <input type="password" 
          name="password" 
          required
          id="password" 
          placeholder="********"
          onChange={(e)=> setSenha(e.target.value)}/>
        </div>

        <div className="form_control">
          <label htmlFor="confirm_password">Confirme sua senha:</label>
          <input type="password" 
          name="confirm_password" 
          required
          id="confirm_password" 
          placeholder="********"
          onChange={(e)=> setConfirm_senha(e.target.value)}/>
        </div>
        
        <div className="form_control">
            <label htmlFor="idade">Idade:</label>
            <input type="number"
            name="idade"
            required
            id="idade"
            placeholder="Idade"
            onChange={(e)=> setIdade(e.target.value)}/>
        </div>

        <div className="form_control">
            <label htmlFor="peso">Peso:</label>
            <input type="number"
            name="peso"
            required
            id="peso"
            placeholder="Peso"
            onChange={(e)=> setPeso(e.target.value)}/>
        </div>

        <div className="form_control">
            <label htmlFor="altura">Altura:</label>
            <input type="text"
            name="altura"
            required
            id="altura"
            placeholder="Altura"
            onChange={(e)=> setAltura(e.target.value)}/>
        </div>

        <div className="form_control">
            <label htmlFor="objetivo">Objetivo:</label>
            <input type="text"
            name="objetivo"
            required
            id="objetivo"
            placeholder="Objetivo na academia"
            onChange={(e)=> setObjetivo(e.target.value)}/>
        </div>

        <div className="form_control">
            <label htmlFor="plano">Plano:</label>
            <select
            name="plano"
            required
            id="plano"
            onChange={(e)=> setNomePlano(e.target.value)}>

              <option selected disabled>Escolha seu Plano</option>
              <option>Básico</option>
              <option>Padrão</option>
              <option>Premium</option>
            </select>
        </div>
          <Link to={`/login`}><input type="button" className="btn_voltar" value="Voltar"/></Link>
          <input type="submit" className="btn_cadastro" value="Cadastrar"/>
      </form>
    </div>
  )
}

export default Cadastro
