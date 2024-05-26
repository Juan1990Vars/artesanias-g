import { useState } from 'react'
import './styles/menu.css'

const Menu = ({types, handleToggles}) => {

  const [isOpens, setIsOpens] = useState(false)
  const handleNavs = () => {
    setIsOpens(!isOpens)
  }

  return (
    <nav className='nav'>
          <i className={` ${isOpens ? 'bx bxs-message-square-x' : 'bx bx-menu'}`} onClick={handleNavs}></i>
      <p className='nav__container'>
        <i className={` ${types ? 'bx bx-toggle-left' : 'bx bxs-toggle-right'}`} onClick={handleToggles}></i> {types ? <i className='bx bx-sun'></i> : <i className='bx bxs-moon'></i>}
      </p>
      <ul className={`nav__ul ${isOpens && 'desplazar'}`}>
        <li className='nav__li'><a href="#conocenos">Conócenos</a></li>
        <li className='nav__li'><a href="#trabajo">Nuestro Trabajo</a></li>
        <li className='nav__li'><a href="#productos">Productos</a></li>
        <li className='nav__li'><a href="#contacto">Contactanos</a></li>
        <li className='nav__li'><a href="#ubicacion">Ubicación</a></li>
      </ul>
    </nav>
  )
}

export default Menu