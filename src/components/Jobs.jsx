import React, { useState } from 'react'
import { slider } from '../assets/slider'
import './styles/jobs.css'

const Jobs = () => {
    const [currenSlide, setCurrenSlide] = useState(0)

    const previous = () => {
        setCurrenSlide((currenSlide - 1 + slider.length)%slider.length)
    }
    const next = () => {
        setCurrenSlide((currenSlide + 1)%slider.length)
    }

  return (
    <div id='trabajo' className='jobs'>
        <h3 className='jobs__title'>Nuestro Trabajo</h3>
        <div className='jobs__box'>
            <i onClick={previous} className='bx bx-chevron-left'></i>
            {
                slider.map((slide, index) => (
                    <section key={index} className={`${index === currenSlide ? 'slider__box--carousel' : 'hidden'}`}>
                        <div>
                            <img className='jobs__img' src={slide.image} alt="" />
                        </div>
                    </section>
                ))
            }
            <i onClick={next} className='bx bx-chevron-right'></i>
        </div>
    </div>
  )
}

export default Jobs