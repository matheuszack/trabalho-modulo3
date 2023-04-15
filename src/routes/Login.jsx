import './Login.css'
import logo from '../componentes/imagem/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState()

  const navigate = useNavigate()  



  return (
    <div className="container_login">
      <div className="login">
        <header className="header_login">
          <img src={logo} alt="" />
          <span>Bem vindo!</span>
        </header>
        <form className="form_login" 
        
        onSubmit={(e)=>{
          e.preventDefault()
            if(email === 'admin@admin.com'){
              if (senha === 'admin'){
                navigate("/DadosClientes")
              } else {
                alert("Senha incorreta")
              }
            } else{
              alert("E-mail incorreto")
            }
        }}>

          <div className="container_input_login">
            <label htmlFor="email">E-mail</label>
            <input type="text" required name="email" id="email" placeholder="email.exemplo@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="container_input_login">
            <label htmlFor="password">Senha</label>
            <input type="password" required name="password" id="password" placeholder="********" onChange={(e)=> setSenha(e.target.value)}/>
          </div>
          <a href="">Esqueci minha senha</a>
          <button className="btn_login">
            Conectar
          </button>
          <div className="footer_login">
            <p>Não possui cadastro? </p>
            <Link to={`/cadastro`}>Cadastrar-se</Link>
          </div>
        
        </form>
      </div>
    </div>
  )
}

export default Login


