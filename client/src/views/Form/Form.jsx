import { useEffect,useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon,getTypes, getPokemons } from "../../redux/actions";
import style from "./Form.module.css"
import formValidate from "./formValidate";
import NavBar from "../../components/NavBar/NavBar";

const Form = () =>{
  const [input,setInput]= useState({
    name:"",
    hp:"",
    attack:"",
    defense:"",
    speed:"",
    height:"",
    weight:"",
    IdType1:"",
    IdType2:""
  })
  const [errors,setErrors] = useState({});
  const history = useHistory();
  const dispatch=useDispatch();
  const types =useSelector(state=>state.types)
  const pokemons=useSelector(state=>state.pokemons)

  useEffect(()=>{
      dispatch(getTypes());
  },[])

  const handleChange=(e)=>{
     setInput({
      ...input,
      [e.target.name]:e.target.value
     })
     setErrors(formValidate({
      ...input,
      [e.target.name]:e.target.value
     },pokemons))

  }
  
  const handleSubmit=(e)=>{
    console.log("es el submit____",input)
    e.preventDefault()
    if(Object.keys(errors).length===0&&input.name!==""){
        dispatch(postPokemon(input));
        dispatch(getPokemons());
        setInput({
          name:"",
          hp:"",
          attack:"",
          defense:"",
          speed:"",
          height:"",
          weight:"",
          IdType1:"",
          IdType2:""
        })
        // alert("The Pokémon was successfully created")
      history.push("/home")
  }
}
    return(
      <div >
        <NavBar></NavBar>
        <div>
             <h2 className={style.sh1}>Create one Pokemon!!</h2>
        </div>
        <div>
            <form className={style.create} onSubmit={handleSubmit}>
              <br></br>

              <label>Name: </label>
              <input onChange={handleChange} type="text" name="name" value={input.name} className={style.in}></input>
              {errors.name?(<div><p>{errors.name}</p>
                            </div>):(<br></br>)}
                            <br></br>              

              <label>Hp: </label>
              <input onChange={handleChange} type="number" name="hp" value={input.hp} className={style.in}></input>
              {errors.hp?(<div><p>{errors.hp}</p>
                            </div>):(<br></br>)}
              <br></br>

              <label>Attack: </label>
              <input onChange={handleChange} type="number" name="attack" value={input.attack} className={style.in}></input>
              {errors.attack?(<div><p>{errors.attack}</p>
                            </div>):(<br></br>)}
              <br></br>

              <label>Defense: </label>
              <input onChange={handleChange} type="number" name="defense" value={input.defense} className={style.in}></input>
              {errors.defense?(<div><p>{errors.defense}</p>
                            </div>):(<br></br>)}
              <br></br>

              <label>Speed: </label>
              <input onChange={handleChange} type="number" name="speed" value={input.speed} className={style.in}></input>
              {errors.speed?(<div><p>{errors.speed}</p>
                            </div>):(<br></br>)}
              <br></br>

              <label>Height: </label>
              <input onChange={handleChange} type="number" name="height" value={input.height} className={style.in}></input>
              {errors.height?(<div><p>{errors.height}</p>
                            </div>):(<br></br>)}
              <br></br>

              <label>Weight: </label>
              <input onChange={handleChange} type="number" name="weight" value={input.weight} className={style.in}></input>
              {errors.weight?(<div><p>{errors.weight}</p>
                            </div>):(<br></br>)}
              <br></br>

              <label>Type 1(Required): </label>
              <select name="IdType1" onChange={handleChange}>
                   <option value={null} ></option>
                   {types.map(e=><option value={e.id}>{e.name.toUpperCase()}</option>)}</select>
                   <br></br>
                   {errors.types&&(<div><p>{errors.types}</p>
                            </div>)}

              <label>Type 2(Optional): </label>
              <select name="IdType2" onChange={handleChange}>
                   <option value={null}></option>
                   {types.map(e=><option value={e.id}>{e.name.toUpperCase()}</option>)}</select>
              <br></br>

             <button disabled={!Object.keys(errors).length&&input.name!==""?false:true} className={style.submit} type="submit">Create</button>  
                
          </form>
      </div>
     </div>
    )
}
export default Form;