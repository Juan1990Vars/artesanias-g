import React from 'react'
import './styles/socialNet.css'

const SocilaNet = () => {
  return (
    <footer>
        <div className='redes'>
            <h4 className='redes__title'>Siguenos</h4>
            <div className='redes__contact'>
              <div className='redes__text'>
               <p className='p1'>Aclaración de dudas y Compras en Internet</p>
               <p className='p2'>+52 56-3113-3669</p>
               <br />
               <p className='p1'>Horario de atención</p>
               <p className='p2'>Lunes a Sabado de 09:00 a 18:00 hrs. </p>
              </div>
            <ul className='links__ul'>
                <li className='links__li'><a href="https://www.instagram.com/guadalupeartesa/" rel='noopener noreferrer nofollow' target='_blank'> <img className='img__li' src="instagram.svg" alt="instagram" /> </a></li>
                <li className='links__li'><a href="https://www.youtube.com/watch?v=d3UuijgQR1M&t=1s" rel='noopener noreferrer nofollow' target='_blank'> <img className='img__li' src="youtube.svg" alt="youTube" /> </a></li>
            </ul>
            </div>
        </div>
    </footer>
  )
}

export default SocilaNet