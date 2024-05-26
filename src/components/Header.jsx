import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <nav className='header'>
         <div className='caja1'>
            <p className='text1'>colonia....... calle...... dirección, Estado de México, 5555555555</p>
        </div>
        <div className='caja2'>
          <header className='imgn'>
            <img className='virg' src="logo.png" alt="morenita" />
          </header>
           <p className='text2'>Artesanias Religiosas "Guadalupe"</p>
           {/* <header className='imgn'>
             <img className='virg' src="virgenMaria.jpg" alt="morenita" />
           </header> */}
        </div>
    </nav>
  )
}

export default Header