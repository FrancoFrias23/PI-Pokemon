import { Link } from "react-router-dom";
import style from "./Bienvenida.module.css"
const Bienvenida = () =>{
    return(
        <div className={style.fondo}>
          <div className={style.inner}>
            <div className={style.content}>
                      
                      <h1>Pokedex</h1>
                      <Link to="/home">Let's Go!</Link>
                    
                
            </div>
           </div>
        </div>
    )
}
export default Bienvenida;