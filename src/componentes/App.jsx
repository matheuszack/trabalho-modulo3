import Navbar from './components/Navbar';

import { Outlet } from 'react-router-dom';



import { userForm } from 'react-hook-form';

import './App.css';

function App() {
 
 const { register, handleSubmit, formState: { erros } } = userForm()

  return (
    <div className="App">
      <Navbar />

       <main>
       <div className="container">
          <h1 className='title'>Cadastro</h1></div>
       <div className="line-post">
       <div className="content">


       <form className="form_id">
                        
      <div className="user-details">
                            <div className="input-box">

                  
                                <span className="details">Nome</span>
                              <input className="nome"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Sobrenome</span>
                                <input className="sobrenome"/>
                            </div>
                            <div className="input-box">
                                <span className="details">senha</span>
                                <input  className="senha"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Repetir senha</span>
                                <input type="password" className="repetir_senha"/>
                            </div>
                            <div className="input-box">
                                <span className="details">idade</span>
                                <input  className="idade"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Peso</span>
                                <input  className="Peso"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Altura</span>
                                <input  className="Altura"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Objetivo</span>
                                <input  className="Name"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Plano</span>
                                <input  className="plano"/>
                            </div>
                             </div>

                        <div className="button">
                            <input className="submit" type="submit" value="Se registrar" />
                        </div>
        </form>
       </div>
        </div>
       </main>

      <div className="container">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
