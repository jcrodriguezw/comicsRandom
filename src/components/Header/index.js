import React, { useState } from 'react'
import './style.scss'

function Header() {

  return (
    <div className='header'>
      <div className='headerWrapp'>
        <img src='https://masiv.com/wp-content/uploads/2019/09/masiv-logo.png' alt='' />

        <div className='headerUser'>
          <p>Hola, Juan</p>
        </div>
      </div>
    </div>
  )
}

export default Header