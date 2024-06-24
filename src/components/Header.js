import React from 'react'
import './header.css'
import Face from '../assets/facebook (1).png'
import Insta from '../assets/instagram.png'
import Tiktok from '../assets/tik-tok.png'
import Corte from '../assets/OIP.jpg'

import Logo from '../assets/logo_e-book_1_4000x4000_4x.png'

const Header = () => {
  return (
    <div className='bg-home'>
      <header>
        <nav className='header-content container'>
          <div className='
          header-logo'>
            <img src={Logo}></img>
          </div>

          <div className='header-button'>
            <a href='#'>Contato</a>
          </div>

          {/* <div className='header-icons'>
            <a href='#'>
              <img src={Face}></img>
            </a>
            <a href='#'>
              <img src={Insta}></img>
            </a>
            <a href='#'>
              <img src={Tiktok}></img>
            </a>
          </div> */}

        </nav>

        <main className='hero container'>
            <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
            <p>Horário de funcionamento: 08:00 ás 19:00</p>
            <a href='#' className='button-contact' target='_blank'>Agendar horário</a>

            <div>
              <a href='#'>Aberto</a>
            </div>

        </main>
      </header>

      
    </div>
  )
}

export default Header