import React from 'react'
import './styles/commons.css'

const Commons = () => {
  return (
    <div className='commons'>
      <p className='commons__p' xmlns:cc="http://creativecommons.org/ns#">
        Este trabajo tiene la licencia{' '}</p>
        <a className='commons__a'
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=selecter-v1"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-NC-ND 4.0
          <div className='commons__div'>
          <img className='commons__img'
            style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt=""
          />
          <img className='commons__img'
            style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt=""
          />
          <img className='commons__img'
            style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            alt=""
          />
          <img className='commons__img'
            style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
            alt=""
          />
          </div>
        </a>
    </div>
  )
}

export default Commons