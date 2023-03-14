import CardsCont from "../../components/CardsCont/CardsCont";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPokemons, getTypes} from "../../redux/actions";
import Filters from "../../components/Filters/Filters";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Home.module.css"

const Home = () =>{
  const allPokemons=useSelector((state) => state.pokemons)
  const searchPokemon= useSelector((state)=>state.selectPokemon)
  const [showPokemons,setShowPokemons]=useState(allPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPokemons, setCurrentPokemons]=useState([])
  const [loading, setLoading]=useState(true);
  const [selectPokemon,setSelectPokemon]= useState([])
  
  const pokemonsPorPag = 12;

  const paginado = (nroP) => {
    setCurrentPage(nroP)
  }
  
  const filtrado = (pokemons,orden,origen,tipo)=>{
    let pokemonsFiltrados=pokemons;
    if(orden===""){
      pokemonsFiltrados=pokemonsFiltrados
    }
    if(orden==="Alphabetic"){
          pokemonsFiltrados=pokemonsFiltrados.sort((a,b)=>a.name.localeCompare(b.name))
    }
  
    if(orden==="Reverse Alphabetic"){
      pokemonsFiltrados=pokemonsFiltrados.sort((a,b)=>a.name.localeCompare(b.name)).reverse()
    }
  
    if(orden==="Major Attack"){
      pokemonsFiltrados=pokemonsFiltrados.sort((a,b)=>b.attack-a.attack)
    }
  
    if(orden==="Lesser Attack"){
      pokemonsFiltrados=pokemonsFiltrados.sort((a,b)=>a.attack-b.attack)
    }
    
    if(tipo!==""){
      pokemonsFiltrados=pokemonsFiltrados.filter((p)=>{
        if(p.Types.length===1){
          return p.Types[0].name===tipo
        }
        else{
          return p.Types[0].name===tipo||p.Types[1].name===tipo
        }})
      }
      if(origen===""){
        pokemonsFiltrados=pokemonsFiltrados
      }
      if(origen==="Api"){
        pokemonsFiltrados=pokemonsFiltrados.filter((p)=>p.created===false)
      }
      if(origen==="Created"){
        pokemonsFiltrados=pokemonsFiltrados.filter((p)=>p.created===true)
      }
     
      setCurrentPokemons(pokemonsFiltrados)

    }

  const dispatch=useDispatch();

  useEffect(()=>{             
        dispatch(getPokemons());
        dispatch(getTypes())
        
    },[])
  useEffect(()=>{              
       
      setShowPokemons(allPokemons)
      setCurrentPokemons(allPokemons)
      if(allPokemons.length>0){
        setLoading(false)   
      }
    },[allPokemons])

  useEffect(()=>{                        
      setSelectPokemon(searchPokemon)
      paginado(1)
    },[searchPokemon])


  let newCurrent=[];
  const indiceUltimoPokemon = currentPage * pokemonsPorPag;
  const indicePrimerPokemon = indiceUltimoPokemon - pokemonsPorPag;
    
  if(selectPokemon.length===0){
      newCurrent=(currentPokemons.slice(indicePrimerPokemon, indiceUltimoPokemon)) 
      }
  else{
    newCurrent=selectPokemon
   }
    
  return(
    <div className={style.container}>   
          <NavBar/>
          <Filters className={style.filter} paginado={paginado} filtrado={filtrado} showPokemons={showPokemons} setCurrentPokemons={setCurrentPokemons}/>  
          
          {loading?<h2 className={style.loading}>Please wait...</h2>:

            <div className={style.cards}>
                <CardsCont newCurrent={newCurrent}
                          pokemonsPorPag={pokemonsPorPag}
                          allPokemons = {selectPokemon.length?1:currentPokemons.length}
                          paginado={paginado}
                          pagina={currentPage}/>
            </div>}
          
        </div>
    )
  }
  export default Home;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // useEffect(()=>{                  ////Ante cada filtro agregado o sacado y ante cada pagina elegida
  //   const indiceUltimoPokemon = currentPage * pokemonsPorPag;
  //   const indicePrimerPokemon = indiceUltimoPokemon - pokemonsPorPag;
  
  //   // setNewCurrent(currentPokemons.slice(indicePrimerPokemon, indiceUltimoPokemon)) 
  // },[currentPokemons,currentPage])