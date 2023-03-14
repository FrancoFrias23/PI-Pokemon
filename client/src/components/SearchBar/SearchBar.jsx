import React from "react";
import style from "./SearchBar.module.css"
import { useDispatch } from "react-redux";
import {getPokemonByName} from "../../redux/actions";

const SearchBar =()=>{
    const[inputName,setInputName]=React.useState("");
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setInputName(e.target.value)
    }
    const handleSubmitName=(e)=>{
        e.preventDefault();
        dispatch(getPokemonByName(inputName))
        setInputName("")
    }
    
    return(
        <div>
            <form className={style.search} onSubmit={handleSubmitName}>
                  <input type="text" name="name"value={inputName} onChange={handleChange} placeholder="Pokemon Name..."/>
                  <button type="Submit">Search</button>
            </form>
        </div>
    
        )
}
export default SearchBar