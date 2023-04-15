import { Link } from 'react-router-dom'
import './Footer.css'



function Footer() {
  return (
    <div className='wrapper'>
      
     
      <footer className='footer'>
        <div className="container-footer">
          <div className="row-footer">
            <div className="footer-col">
              <h4>Empresa</h4>
              <ul>
                <li><a href="">Quem somos</a></li>
                <li><a href="">Nossos serviços</a></li>
                <li><a href="">Politica de privacidade</a></li>
                <li><a href="">Programa de afiliados</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Loja Online</h4>
              <ul>
                <li><Link to={`/produtos`}>Creatina</Link></li>
                <li><Link to={`/produtos`}>Whey Protein</Link></li>
                <li><Link to={`/produtos`}>Pré-treino</Link></li>
                <li><Link to={`/produtos`}>Vitaminas</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Fale Conosco</h4>
              <div className="form-sub">
                <form action=""><input type="email" placeholder='Digite seu e-mail' required/>
                <button>Enviar</button>
                </form>
              </div>
              <div className="medias-sociais">
                <a href=""><i className=""></i></a>
                <a href=""><i className=""></i></a>
                <a href=""><i className=""></i></a>
                <a href=""><i className=""></i></a>
              </div>
            </div>
      
      
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
