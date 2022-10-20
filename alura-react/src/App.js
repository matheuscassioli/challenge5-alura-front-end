import "../src/componentes/categorias/categorias.css";     

import Cabecalho from "./componentes/cabecalho";
import Banner from "./componentes/banner"; 
import Produtos from "../src/componentes/produtos";  
import Categoria from "../src/componentes/categorias"
import Rodape from "./componentes/rodape"; 
import Assinatura from "./componentes/assinatura";

import venderwhite from "../src/assets/img/vender-white.png"
import dartblack from "../src/assets/img/dart-black.png"
import yodaorange from "../src/assets/img/yoda-orange.png"
import venderwhitebody from "../src/assets/img/vender-white-corpo.png"
import yoda from "../src/assets/img/yoda.png"
import darkblackfull from "../src/assets/img/dart-black-all.png"
 
import controlebranco from "../src/assets/img/controle-white.png"
import controlepink from "../src/assets/img/console-pink.png"
import antigo from "../src/assets/img/antigo.png"
import controles from "../src/assets/img/controles.png"
import consolestudio from "../src/assets/img/console-studio.png"
import gameboy from "../src/assets/img/gameboy.png"
 

import atari from "../src/assets/img/atari.png"
import gaming from "../src/assets/img/gaming.png"
import sonic from "../src/assets/img/sonic.png"
import bluepink from "../src/assets/img/bluepink.png"
import Var from "../src/assets/img/Var.png"
import pikachu from "../src/assets/img/pikachu.png"




function App() {
  return (
    <div>
 
    <Cabecalho />

    <main>

      <Banner /> 
      
                <section className="star-wars">  
                    <Categoria  categoria='Star-Wars'/>
                        <div className="star-wars__conteudo">  
                                    <Produtos  produto = 'Produto XYZ'  preco='60,00' alt='dartvender branco'  img={`${venderwhite}`} />
                                    <Produtos  produto = 'Produto XYZ'  preco='60,00' alt='dart'  img={`${dartblack}`}/>
                                    <Produtos  produto = 'Produto XYZ'  preco='60,00' alt='dart'  img={`${yodaorange}`}/>
                                    <Produtos  produto = 'Produto XYZ'  preco='60,00' alt='dart'  img={`${venderwhitebody}`}/>
                                    <Produtos  produto = 'Produto XYZ'  preco='60,00' alt='dart'  img={`${yoda}`}/>
                                    <Produtos  produto = 'Produto XYZ'  preco='60,00' alt='dart'  img={`${darkblackfull}`}/> 
                        </div>
                </section> 

                <section className="star-wars">  
                    <Categoria  categoria='Consoles'/>
                        <div className="star-wars__conteudo">  
                                    <Produtos  produto = 'Controle XYZ'  preco='60,00' alt='dartvender branco'  img={`${controlebranco}`} />
                                    <Produtos  produto = 'Controle e console XYZ'  preco='60,00' alt='dart'  img={`${controlepink}`}/>
                                    <Produtos  produto = 'Console XYZ'  preco='60,00' alt='dart'  img={`${antigo}`}/>
                                    <Produtos  produto = 'Controle XYZ'  preco='60,00' alt='dart'  img={`${controles}`}/>
                                    <Produtos  produto = 'Console XYZ'  preco='60,00' alt='dart'  img={`${consolestudio}`}/>
                                    <Produtos  produto = 'Game Boy Color'  preco='60,00' alt='dart'  img={`${gameboy}`}/> 
                        </div>
                </section> 

                <section className="star-wars">  
                    <Categoria  categoria='Diversos'/>
                        <div className="star-wars__conteudo">  
                                    <Produtos  produto = 'Camisa Atari'  preco='60,00' alt='dartvender branco'  img={`${atari}`} />
                                    <Produtos  produto = 'Camisa SNES'  preco='60,00' alt='dart'  img={`${gaming}`}/>
                                    <Produtos  produto = 'Controle e Console XYZ'  preco='60,00' alt='dart'  img={`${sonic}`}/>
                                    <Produtos  produto = 'Controle e Console XYZ'  preco='60,00' alt='dart'  img={`${bluepink}`}/>
                                    <Produtos  produto = 'Controle e Console XYZ'  preco='60,00' alt='dart'  img={`${Var}`}/>
                                    <Produtos  produto = 'Controle e Console XYZ'  preco='60,00' alt='dart'  img={`${pikachu}`}/> 
                        </div>
                </section> 

        <Rodape />

        <Assinatura />
 
    </main>

    </div>
  );
}

export default App;
