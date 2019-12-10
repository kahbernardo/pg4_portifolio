import React,{useState, useEffect} from 'react';
import logo from './images/beats_logo.jpg';
import fundo from './images/dre_beats.jpg'
import lupa from './images/download.png'
import carrinho from './images/cart.png'
import user from './images/human.png'
import { Carrinho, Twitter, Instagram, Facebook, Linkedin, User, Lupa } from './components/svg/Svg'

import './App.css';
import { Link } from './styles'
import { LinkInferior } from './styles'


function App() {
  const [headphone,setHead]=useState('Headphones')
  const [performance,setPerformance]=useState('Performance')
  const [sobre,setSobre]=useState('Sobre Nós')
  const [media,setMedia]=useState('Media')
  const [suporte,setSuporte]=useState('Suporte')
  const [cor, setCor]=useState(false)
  // ================
  const [politica,setPolitica]=useState('Politica de Privacidade')
  const [garantia,setGarantia]=useState('Garantia')
  const [contato,setcontato]=useState('Contato')
// ===================


  useEffect(()=>{
    console.log(cor)
  }, [cor])

  return (
    
    <div className="container">
      <header className="cabecalho">
        <img src={logo}/>
        <div className= 'menu'>
            <ul>
              <li>
                <button>
                <Link cor={cor} onClick={()=>{setCor(!cor)}}>{ headphone }</Link>
                </button>
              </li>
              <li>
                <button>
                <Link cor={cor} onClick={()=>{setCor(!cor)}}>{ performance }</Link>
                </button>
              </li>
              <li>
                <button>
                <Link cor={cor} onClick={()=>{setCor(!cor)}}>{ sobre }</Link>
                </button>
              </li>
              <li>
                <button>
                <Link cor={cor} onClick={()=>{setCor(!cor)}}>{ media }</Link>
                </button>
              </li>
              <li>
                <button>
                <Link cor={cor} onClick={()=>{setCor(!cor)}}>{ suporte }</Link>
                </button>
              </li>
            </ul>
        </div>
          <ul className='menuicones'>
            <li>
              <button><img src={lupa}/>
              </button>
              <button>
                {/* <Carrinho/> */}
                <img src={carrinho}/>
              </button>
              <button>
                <img src={user}/>
              </button>
            </li>
          </ul>
      </header>
       <div className='corpo'>
          <span className='titulo'>O som dos profissionais</span>
          <span className='subtitulo'>Fone de ouvido intra-auricular de alto desempenho totalmente sem fio.<br></br> À venda em todas as cores.
          </span>
          <button>
            COMPRE AGORA
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
                <LinkInferior cor={cor} onClick={()=>{setCor(!cor)}}>{ politica }</LinkInferior>
              </li>
              <li>
                <LinkInferior cor={cor} onClick={()=>{setCor(!cor)}}>{ garantia }</LinkInferior>
              </li>
              <li>
                <LinkInferior cor={cor} onClick={()=>{setCor(!cor)}}>{ suporte }</LinkInferior>
              </li>
              <li>
                <LinkInferior cor={cor} onClick={()=>{setCor(!cor)}}>{ contato }</LinkInferior>
              </li>
            </ul>
          </div>
      </div>

    </div>
  );
}

export default App;
