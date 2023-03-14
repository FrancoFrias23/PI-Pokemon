import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>

  ,
  document.getElementById('root')
);

















// let AllPokemoninAPI =((await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)).data.results); 
// const listadePokemonApi=[];    

// for (const pk of AllPokemoninAPI){
//     const pokemon= (await axios.get(pk.url)).data;
//     const pokLimpio= cleanPokemon(pokemon); 
//     listadePokemonApi.push(pokLimpio)}

//  /traen types:["tipo1","tipo2"]