import React, { useEffect, useState } from "react";
import "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filters.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { resetName } from "../../redux/actions";

export default function Filters({paginado,filtrado,showPokemons,setCurrentPokemons}) {
    
    const dispatch=useDispatch()
    const types = useSelector(state=>state.types)
    const [orden,setOrden]=useState("")
    const [tipo,setTipo]=useState("")
    const [origen,setOrigen] = useState("")

    const cambiarOrden=(e)=>{
        setOrden(e.target.value)
    }
    const cambiarTipo=(e)=>{
        setTipo(e.target.value)
    }
    const cambiarOrigen=(e)=>{
        setOrigen(e.target.value)
    }
    const refresh=(e)=>{
          e.preventDefault()
          setOrden("");
          setOrigen("");
          setTipo("")
          dispatch(resetName())
    }

    useEffect(() => {
        if(showPokemons.length>0){
            filtrado(showPokemons,orden,origen,tipo)
            paginado(1);
        }
    }, [orden, tipo, origen]);

    return(
        <div className={style.container}>
               <div>
                   <select className={style.selecttype} name="Tipo" onChange={cambiarTipo}>
                         <option key={"-1"} value="">All types</option>
                         {types.map((t)=><option key={t.id} value={t.name}>{t.name}</option>)}
                    </select>
               </div>
               <div>
                   <select className={style.selectorigin} name="Origen" onChange={cambiarOrigen}>
                         <option key={"-2"} value="">All Origins</option>
                         <option key={"-3"}value="Api">Api</option>
                         <option key={"-4"}value="Created">Created</option>
                   </select>
               <div>
                   <select className={style.selectorder} name="Orden" onChange={cambiarOrden}>
                         <option key={"1"} value="">#Default Order</option>
                         <option key={"2"} value="Alphabetic">Alphabetic</option>
                         <option key={"3"} value="Reverse Alphabetic">Reverse Alphabetic</option>
                         <option key={"4"} value="Major Attack">Major Attack</option>
                         <option key={"5"} value="Lesser Attack">Lesser Attack</option>
                   </select>
               </div>
               </div>
               <button className={style.button} onClick={refresh}>Refresh</button>
               <SearchBar className={style.serch}/>
        </div>
    )
}