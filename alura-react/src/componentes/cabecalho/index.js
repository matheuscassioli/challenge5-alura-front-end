import "./cabecalho.css";   
import logo from '../../assets/img/logo.png'
import lupa from '../../assets/img/lupa.png'
   

export default function Cabecalho(){
  
    return (
        <header className="cabecalho">

        <div className="cabecalho__conteudo">

            <img src={logo} alt="logo da alura-geek" />

            <div className="cabecalho__pesquisa">
                <input type="text" className="cabecalho__pesquisa--input" placeholder="O que você deseja encontrar?" />
                <img src={lupa} alt="ícone de lupa" className="cabecalho__pesquisa--lupa" />
            </div>

        </div>

        <button className="cabecalho__button">Login</button>

        <img src={lupa} alt="ícone de lupa" className="lupa-mobile" />

    </header>
    ) 
}