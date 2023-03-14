import React from 'react'
import style from './Paginado.module.css'

export default function Paginado({ pokemonsPorPag, allPokemons, paginado, pagina}){
    const cantidadDePaginas = []

    for (let i = 0 ; i < Math.ceil(allPokemons/pokemonsPorPag); i++){
        cantidadDePaginas.push(i + 1)
    }

    return(
        <nav className={style.container}>
            <ul className={style.pagination}>
                { (cantidadDePaginas && pagina>1)&& <li key="prevPage">
                           <button className={style.buttons} onClick={() => paginado(pagina-1)}>{"<<"}</button>
                </li>}

                              
                {
                    cantidadDePaginas && cantidadDePaginas.map(p=> (
                           <button className={style.buttons} style={ pagina === p ? {color:"white" ,backgroudcolor: "blue"} : {}}onClick={() => paginado(p)}>{p}</button>
                    ))
                }
                {(cantidadDePaginas&&pagina<cantidadDePaginas.length)&&<li key="nextPage">
                           <button className={style.buttons} onClick={() => paginado(pagina+1)}>{">>"}</button>
                </li> }
                
            </ul>
        </nav>
    )

}