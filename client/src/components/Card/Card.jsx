import { Link } from "react-router-dom";
import style from "./Card.module.css"
import mainImage from "../../images/Undefined.png";

const Card = ({id,name,img,Types,created}) =>{
    let arrTypes=Types.map(t=>t.name)
    return(
        <div className={style.card}>
    
             {!isNaN(id)?<Link to={`/detail/${id}`}><h3># {id} : {name.toUpperCase()}</h3></Link>:
                         <Link to={`/detail/${id}`}><h3>{name.toUpperCase()}</h3></Link>}

             <h5>Type: {arrTypes.join(",").toUpperCase()}</h5>

             {!created?<img src={img} alt={name}></img>:
             <img src={mainImage} alt={name}></img>}
        
          
        </div>
    )
}
export default Card;

// Toma las propiedades de cada pokemon y las muestra 
// Permite ir al detalle del pokemon a traves de un Link en su nombre