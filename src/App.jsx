import React,{useState, useEffect} from 'react';
import logo from './images/beats_logo.jpg';
import fundo from './images/dre_beats.jpg'
import { Carrinho, Twitter, Instagram, Facebook, Linkedin, User, Lupa } from './components/svg/Svg'

import './App.css';
import { Link } from './styles'

function App() {
  const [teste,setTeste]=useState('Headphones')
  const [cor, setCor]=useState(false)

  useEffect(()=>{
    console.log(cor)
  }, [cor])

  return (
    <>
    <div className="container">
      <header className="cabecalho">
        <img src={logo}/>
        <div className= 'menu'>
            <ul>
              <li>
                <Link cor={cor} onClick={()=>{setCor(!cor)}}>{ teste }</Link>
              </li>
              <li>
                <a>Performance</a>
              </li>
              <li>
                <a>Company</a>
              </li>
              <li>
                <a>Media</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
        </div>
          <ul className='menuicones'>
            <li>
              <a>
                <Lupa/>
              </a>
              <a>
                <Carrinho/>
              </a>
              <a>
                <User/>
              </a>
            </li>
          </ul>
      </header>
       <div className='Corpo'>
          <span className='titulo'>Logix Envolve 85e</span>
          <span className='subtitulo'>Whetever you're a sound engineer, DJ, video content creator or mobile journalist, our new Professional Audio section of the visible has what you need.
          </span>
          <button>
            SHOP NOW
          </button>
      </div>
      <div className='footer'>
        <div>
          <ul className='redessociais'>
            <li>
                <Facebook/>
            </li>
              <li>
                <Twitter/>
              </li>
              <li>
                <Linkedin/>
              </li>
              <li>
                <Instagram/>
              </li>
            </ul>
          </div>
          <div className='menupaginas'>
            <ul>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Warranty</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
      </div>

    </div>
    </>
  );
}

export default App;
