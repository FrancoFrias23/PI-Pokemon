const { Pokemon, Type } = require("../db");
const axios= require("axios");
// const { Error } = require("sequelize");

const cleanPokemon=(data)=>{
    let pokemonEnLimpio ={
        name:data.name,
        hp:data.stats[0].base_stat,
        attack:data.stats[1].base_stat,
        defense:data.stats[2].base_stat,
        speed:data.stats[5].base_stat,
        height:data.height,
        weight:data.weight,
        created:false,
        img:data.sprites.other.dream_world.front_default,
        id:data.id,
        Types:data.types.map((t)=>{
           return { name:t.type.name}}
           )    
    };
    
    return pokemonEnLimpio
}

const createPokemon = async (name,hp,attack,defense,speed,height,weight,IdType1,IdType2)=>{
  const createdPokemon=await Pokemon.create({name,hp,attack,defense,speed,height,weight});
  if((IdType1*1)!==0){
  const pokeType1 =await Type.findAll({
      where:{ id:IdType1*1 }
  })
  await createdPokemon.addType(pokeType1);
  }
if((IdType2*1)!==0){
  const pokeType2 =await Type.findAll({
      where:{ id:IdType2*1 }
      })
  await createdPokemon.addType(pokeType2)
  }
return createdPokemon    
}

const getTypes = async()=>{
    let aux =await Type.findAll();
      if(aux.length){
            return aux
               }
      else{
            const typesNames = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
            return  await Type.bulkCreate(typesNames)
           }
}

const getAllPokemons = async () =>{
    let AllPokemonsDBB= await Pokemon.findAll({
        include:{
            model:Type,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }   
    });
    
    const listadePokemonApi=[];  

    const pokemonsUrl = [];

for (let i = 1; i <= 30; i++) {
  pokemonsUrl.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}
await Promise.all(pokemonsUrl.map((p) => axios.get(p)))
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
          let data = res[i].data;
          listadePokemonApi.push({
          id: data.id,
          name: data.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          img: data.sprites.other.dream_world.front_default,
          Types:data.types.map((t)=>{return { name:t.type.name}}) ,
          height: data.height,
          weight: data.weight,
          created: false
        });
      }
    })

// let AllPokemoninAPI =((await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)).data.results);  

// for (const pk of AllPokemoninAPI){
//     const pokemon= (await axios.get(pk.url)).data;
//     const pokLimpio= cleanPokemon(pokemon); 
//     listadePokemonApi.push(pokLimpio)}

//  /traen types:["tipo1","tipo2"]
    console.log(listadePokemonApi);
    console.log(AllPokemonsDBB)
    return [...listadePokemonApi,...AllPokemonsDBB];
}
const getPokemonById = async (id) => {
    const pokemon= isNaN(id)?await Pokemon.findByPk(id,{include:{
        model:Type,
        attributes:["name"],
        through:{
            attributes:[]
        }}}):
    cleanPokemon((await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data)  
    return pokemon 
}


const getAllPokemonsName = async (name)=>{
    let results=[];
    let pokemonsInDBB = await Pokemon.findAll({
        where:{
            name:name,
        }
    })
    results=results.concat(pokemonsInDBB);
    let pokemonInApi= cleanPokemon((await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)).data)
    results.push(pokemonInApi)
    return results
}
// const createType= async(name)=>{
//     const newType= await Type.create({name});
//     return newType
// }

const docViewsHandler = async(req,res) => {
    const { id } = req.params;
    try {
        await Type.update({
            doc_views: doc_views + 1
        },{
            where:{id}
        });
        res.status(200).send(`El fue visto una vez mas`)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
 }

module.exports={
    // createType,  
    getTypes,
    createPokemon,
    getAllPokemons,
    getAllPokemonsName,
    getPokemonById,
    docViewsHandler
}



















