import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import academicFetch from "../axios/config"
import SearchInput from "../Searchinput"
import './Navbar.css'
import carrinho from './imagem/carrinho-de-compras.png'
import logo from './imagem/logo.png'
import { useCart } from "./CartContext"



function Navbar() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')

  const navLista = useRef()
  const mobileMenu = useRef()
  const navLinks = useRef()
  const navLinks1 = useRef()
  const navLinks2 = useRef()
  const navLinks3 = useRef()
  const navLinks4 = useRef()
  
  const cart = useCart();

  // função para mostrar os itens somados no carrinho
  const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0);

  useEffect(() => {
    (async () => {
      if (text) {
        await academicFetch
          .get(`/produtos?q=${text}&_limit=4`)
          .then((response) => {
            setInfo(response)

          })
      }
    })()
  }, [text])


  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to={`/`} className="logo"><img src={logo} alt=""/></Link>
        </div>
        <div ref={mobileMenu} className="menu_mobile"
          onClick={() => {
            if (navLista.current.className === "navbarLista" && mobileMenu.current.className === "menu_mobile") {
              navLista.current.className = "navbarLista active"
              mobileMenu.current.className = "menu_mobile active"
              navLinks.current.className = "navbarListaLi active"
              navLinks1.current.className = "navbarListaLi1 active"
              navLinks2.current.className = "navbarListaLi2 active"
              navLinks3.current.className = "navbarListaLi3 active"
              navLinks4.current.className = "navbarListaLi4 active"

            } else if (navLista.current.className === "navbarLista active" && mobileMenu.current.className === "menu_mobile active") {
              navLista.current.className = "navbarLista"
              mobileMenu.current.className = "menu_mobile"
              navLinks.current.className = "navbarListaLi"
              navLinks1.current.className = "navbarListaLi1"
              navLinks2.current.className = "navbarListaLi2"
              navLinks3.current.className = "navbarListaLi3"
              navLinks4.current.className = "navbarListaLi4"
            }
          }}>

          <div className="linha1"></div>
          <div className="linha2"></div>
          <div className="linha3"></div>
        </div>
        <ul ref={navLista} className="navbarLista">
         
          <li ref={navLinks} className="navbarListaLi1"><Link to={`/`}>Home</Link></li>
          <li ref={navLinks1} className="navbarListaLi2"><Link to={`/produtos`}>Produtos</Link></li>
          <li ref={navLinks2} className="navbarListaLi3"><Link to={`/login`}>Login</Link></li>
          <li ref={navLinks3} className="navbarListaLi">
            <div className="container_input">
              <SearchInput value={text} onChange={(e) => setText(e)} />
              <div className="container_produtos"></div>
              <div className="produtos">
                {info.data && (
                  text === '' ? false :
                    info.data.map((product) => (
                      <Link to={`/produtos`} key={product.id}>
                        <p>{product.name}</p>
                      </Link>
                    ))
                )
                }
              </div>
            </div>
          </li>
          <li
            ref={navLinks4}
            className="navbarListaLi4"
          >
            <Link to={`/carrinho`}>
              <div className="cartIcon">
                <img
                  src={carrinho}
                  alt="Icone Carrinho"
                />
                {itemsCount > 0 && <span>{itemsCount}</span>}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}



export default Navbar





