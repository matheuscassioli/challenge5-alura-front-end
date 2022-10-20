import "./rodape.css"
import logo from "../../assets/img/logo.png"

export default function Rodape(){
   return(
       <section className="rodape">
       <div className="rodape__conteudo">
           <img src={logo} className="rodape__logo" alt="" />

           <nav className="rodape__navegacao">
               <ul className="rodape__lista">
                   <li className="rodape__item"><a className="rodape__link" href="">Quem somos nós</a></li>
                   <li className="rodape__item"><a className="rodape__link" href="">Políticas de privacidade</a></li>
                   <li className="rodape__item"><a className="rodape__link" href="">Programa fidelidade</a></li>
                   <li className="rodape__item"><a className="rodape__link" href="">Novas lojas</a></li>
                   <li className="rodape__item"><a className="rodape__link" href="">Quero ser franqueado</a></li>
                   <li className="rodape__item"><a className="rodape__link" href="">Anuncie aqui</a></li>
               </ul>
           </nav>
       </div>

       <form className="rodape__formulario">
           <p>Fale conosco</p>
           <input type="text" className="rodape__formulario--nome" placeholder="Nome:" />
           <input type="text" className="rodape__formulario--mensagem" placeholder="Escreva uma mensagem" />  
           <button className="rodape__formulario--button">Envia mensagem</button>
       </form>

   </section>
   )
}