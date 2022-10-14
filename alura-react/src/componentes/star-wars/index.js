import "./star-wars.css";    
import arrowver from "../../assets/img/arrow-ver.png"
import venderwhite from "../../assets/img/vender-white.png"
import dartblack from "../../assets/img/dart-black.png"
import yodaorange from "../../assets/img/yoda-orange.png"
import venderwhitebody from "../../assets/img/vender-white-corpo.png"
import yoda from "../../assets/img/yoda.png"
import darkblackfull from "../../assets/img/dart-black-all.png"

export default function Banner(){
  
    return ( 

  <section className="star-wars">
        <div className="star-wars__nav">
            <div className="star-wars__titulo">Star Wars</div>
            <div className="star-wars__ver">Ver tudo<img src={arrowver} alt="seta para direita" />
            </div>
        </div>
        
        <div className="star-wars__conteudo">
            <div className="star-wars__itens"><img src={venderwhite} alt='dart branco'/>
                <p>Produto XYZ</p>
                <p className="star-wars__preco">R$ 60,00</p>
                <a href="#">Ver produto</a>
            </div>
            <div className="star-wars__itens"><img src={dartblack} />
                <p>Produto XYZ</p>
                <p className="star-wars__preco">R$ 60,00</p>
                <a href="#">Ver produto</a>
            </div>
            <div className="star-wars__itens"><img src={yodaorange}/>
                <p>Produto XYZ</p>
                <p className="star-wars__preco">R$ 60,00</p>
                <a href="#">Ver produto</a>
            </div>
            <div className="star-wars__itens"><img src={venderwhitebody}/>
                <p>Produto XYZ</p>
                <p className="star-wars__preco">R$ 60,00</p>
                <a href="#">Ver produto</a>
            </div>
            <div className="star-wars__itens"><img src={yoda}/>
                <p>Produto XYZ</p>
                <p className="star-wars__preco">R$ 60,00</p>
                <a href="#">Ver produto</a>
            </div>
            <div className="star-wars__itens"><img src={darkblackfull}/>
                <p>Produto XYZ</p>
                <p className="star-wars__preco">R$ 60,00</p>
                <a href="#">Ver produto</a>
            </div>
        </div>
        </section> 

    ) 
}
 