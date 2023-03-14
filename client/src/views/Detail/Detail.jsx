import {getPokemonDetail} from "../../redux/actions"
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css"
import mainImage from "../../images/Undefined.png";


const Detail = () =>{
  const parametros=useParams(); 
  const idParams=parametros.id;
  const dispatch=useDispatch();
  const detalle= useSelector((state)=>state.pokemonDetail);
  const {name,hp,attack,defense,speed,height,weight,img,Types,id,created} = detalle;

  React.useEffect(
    ()=>{    
      dispatch(getPokemonDetail(idParams))}
    ,[])

  return(<>
              <NavBar className={style.nav}></NavBar>
              {idParams==id?<div className={style.detailCard}>
                               <h1>{name.toUpperCase()}</h1>
                               <img  className={style.pokeimage} src={created?mainImage:img} alt={name}></img>
                               
                               <div className={style.detail}>
                                 <h3>ID: {id}</h3>
                                 <h3>TYPE: {Types[0].name} {Types[1]?Types[1].name:null}</h3>
                                 <h3>LIFE POINTS: {hp}</h3>
                                 <h3>ATTACK:   {attack}</h3>
                                 <h3>DEFENSE:  {defense}</h3>
                                 <h3>VELOCITY:  {speed}</h3>
                                 <h3>HEIGHT:    {height}</h3>
                                 <h3>WEIGHT:   {weight}</h3>
                               </div>
                               
                            </div>:
                             <h4>Loading...</h4> 
               } 
        </>
       )
}
export default Detail;