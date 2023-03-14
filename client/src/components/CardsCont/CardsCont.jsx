import Card from "../Card/Card";
import style from "./CardsCont.module.css"
import Paginado from "../Paginado/Paginado"

const CardsCont = ({newCurrent,pokemonsPorPag,allPokemons,paginado,pagina}) =>{
 
    return(
        <div className={style.algo}>
          <div className={style.paginado}>
          <Paginado
                pokemonsPorPag={pokemonsPorPag}
                allPokemons = {allPokemons}
                paginado={paginado}
                pagina={pagina}/>
          </div>
             {newCurrent.length>0?<div className={style.container}>
                  {newCurrent.map(p=><Card id={p.id} 
                                        name={p.name} 
                                        hp={p.hp} 
                                        attack={p.attack} 
                                        defense={p.defense} 
                                        speed={p.speed} 
                                        height={p.height} 
                                        weight={p.weight}
                                        key={p.id}
                                        img={p.img}
                                        Types={p.Types}
                                        created={p.created}/>)}</div>:
                              <h2>Sin información</h2>
              }
          </div>
    )
}
export default CardsCont;

//Toma el array de pokemon y renderiza una card por cada elemento