import {
    GET_POKEMONS,
    GET_POKEMON_BY_NAME,
    GET_POKEMON_DETAIL,
    GET_TYPES,
    POST_POKEMON,
    RESET_NAME,
 } from './actions';

 const initialState = {
    pokemons:[],
    pokemonDetail:{},
    types:[],
    selectPokemon:[]
 };

 const rootReducer = (state = initialState, action) => {
     switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons:action.payload,
            };
        case RESET_NAME:
                return{
                    ...state,
                    selectPokemon:[]
                }
            
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                selectPokemon:action.payload
            }
        case GET_POKEMON_DETAIL:
            return{
                ...state,
                pokemonDetail:action.payload
            } 
        case GET_TYPES:
            return{
                ...state,
                types:action.payload
            }  
        case POST_POKEMON:
            return{
                ...state
            }
           
        default: 
            return{
            ...state
            }
        }
 }

 export default rootReducer;