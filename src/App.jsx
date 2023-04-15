import Navbar from './componentes/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './componentes/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <div className="conteudo_vazio"></div>
      <Footer />
    </div>
  )
}

export default App
