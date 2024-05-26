import React from 'react'
import './styles/knowUs.css'

const KnowUs = () => {
  return (
    <nav id='conocenos' className='knowUs'>
        <div className='knowUs__div'>
        <iframe className='youtube' width="560" height="315" src="https://www.youtube.com/embed/d3UuijgQR1M?si=vu_yESKS-2mRAWVV&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <details className='knowUs__deta-1'>
            <summary className='knowUs__deta-sum'>Mision de la empresa</summary>
            <p className='knowUs__p'>Poner al alcance de todo el mundo los más bellos productos empleados en la adoración a Dios, gracias a la visión emprendedora de nuestros administradores hemos tenido un notable crecimiento en la comercialización de artículos religiosos de calidad, en su fabricación y nuestra misión es ser líder en fomentar el fortalecimiento del culto religioso del catolicismo.</p>
        </details>
        <details className='knowUs__deta'>
            <summary className='knowUs__deta-sum'>Visión</summary>
            <p className='knowUs__p'>Ser tienda numero 1 en proveeduría a la iglesia católica en México con nuestra cada vez más extensa gama de productos necesarios en el culto religioso católico. Alcanzar el éxito comercial ofreciendo un alto estándar de calidad en la elaboración artesanal de manos mexicanas todas nuestras bellas imágenes, éste arte sagrado es para ensalzar al nombre del Señor, nuestro amor por lo que hacemos se mira reflejado en la calidad de todos nuestros productos.</p>    
        </details>
        <details className='knowUs__deta'>
            <summary className='knowUs__deta-sum'>Objetivo</summary>
            <ul className='knowUs__ul'>
                <li className='knowUs__li'>Ser numero 1° en el mercado</li>
                <li className='knowUs__li'>Ser una marca reconocida por sus diseños innovadores</li>
                <li className='knowUs__li'>Reconocidos por su gran variedad de artículos religiosos</li>
                <li className='knowUs__li'>Incrementar un 10% nuestra cartera de clientes cada semana</li>
                <li className='knowUs__li'>Incrementar hasta un 30% nuestra cartera de clientes cada mes</li>
                <li className='knowUs__li'>Reducir el tiempo de espera de nuestros clientes en el Mostrador y al Teléfono,logrando un mayor beneficio para cliente-proveedor.</li>
            </ul>
        </details>
    </nav>
  )
}

export default KnowUs