import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import './index.css'
import { CartProvider } from "./componentes/CartContext"

// Paginas
import Cadastro from './routes/Cadastro'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import DadosClientes from './routes/DadosClientes'
import Login from './routes/Login'
import Edit from './routes/Edit'
import Carrinho from './routes/Carrinho'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
       path: "/",
       element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/dadosclientes",
        element: <DadosClientes />
      },
      {
        path: "*",
        element: <Cadastro /> 
      },
      {
        path: "/editardados/:id",
        element: <Edit />
      },
      {
        path: "/carrinho",
        element: <Carrinho />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // envelopamento para todas as páginas conseguirem usar o carrinho
  <CartProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartProvider>
)
