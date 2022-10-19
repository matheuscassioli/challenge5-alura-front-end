import "./categorias.css"
import arrowver from "../../assets/img/arrow-ver.png"

export default function Categoria(props){
    return(
        <div className="star-wars__nav">
        <div className="star-wars__titulo">{props.categoria}</div>
        <div className="star-wars__ver">Ver tudo<img src={arrowver} alt="seta para direita" />
        </div>
    </div>  
    )
}