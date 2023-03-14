import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID ="GET_POKEMON";
export const GET_POKEMON_BY_NAME="GET_POKEMON_BY_NAME";
export const GET_POKEMON_DETAIL="GET_POKEMON_DETAIL";
export const GET_TYPES="GET_TYPES";
export const POST_POKEMON="POST_POKEMON";
export const RESET_NAME="RESET_NAME"


export const getPokemons=()=>{
    return async (dispatch)=>{
        const apiData= await axios.get("http://localhost:3100/pokemons");
        const pokemons=apiData.data;
        dispatch({type:GET_POKEMONS,payload:pokemons})
    }
}
export const getPokemonDetail=(id)=>{
    return async (dispatch)=>{
        const apiData= await axios.get(`http://localhost:3100/pokemons/${id}`);
        const pokemon=apiData.data;
        dispatch({type:GET_POKEMON_DETAIL,payload:pokemon})
    }
}
export const getTypes=()=>{
    return async function(dispatch){
        const inform = (await axios.get("http://localhost:3100/types")).data;
        dispatch({type:GET_TYPES,payload: inform})
    }
}
export const postPokemon=(payload)=>{
    return async function(dispatch){
        const newPokemon = (await axios.post("http://localhost:3100/pokemons", payload)) ///paso info por body
        dispatch({type:POST_POKEMON})
    }
}


export const getPokemonByName=(name)=>{
    return async (dispatch)=>{
        const apiData= await axios.get(`http://localhost:3100/pokemons?name=${name}`);
        const pokemon=apiData.data;
        dispatch({type:GET_POKEMON_BY_NAME, payload:pokemon})
    }
}
export const resetName=()=>{
    return (dispatch=>{
        dispatch({type:RESET_NAME})
    })
}