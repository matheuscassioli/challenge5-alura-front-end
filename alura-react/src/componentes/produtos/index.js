import "./produtos.css";    
  
export default function Produtos(props){ 

    return (  

        <div className="star-wars__itens">
            <img src={props.img} alt={props.alt}/>
            
            <p>{props.produto}</p>
            
            <p className="star-wars__preco">R${props.preco}</p>
            
            <a href="#">Ver produto</a> 

        </div>
) 
}
 


