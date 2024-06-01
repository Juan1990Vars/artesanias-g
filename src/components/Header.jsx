import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <nav className='header'>
         <div className='caja1'>
            <p className='text1'>Calle Santo Tomas s/n, 55996, Santa María Maquixco el alto, Temascalapa, Estado de México, +52 56 3113 3669</p>
        </div>
        <div className='caja2'>
          <header className='imgn'>
            <img className='virg' src="logo.png" alt="morenita" />
          </header>
           <p className='text2'>Artesanias Religiosas "Guadalupe"</p>
        </div>
    </nav>
  )
}

export default Header