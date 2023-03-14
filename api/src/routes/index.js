const { Router } = require('express');
const { createPokemon, getPokemonById, getAllPokemons,getAllPokemonsName, getTypes,createType, docViewsHandler } = require('../controllers/controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res) => {
    const { name } = req.query;
    try {
        let results = name?await getAllPokemonsName(name):await getAllPokemons();
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
})

router.get('/pokemons/:id', async (req, res) => {
    const { id }=req.params;
    try {
        const pokemonById = await getPokemonById(id)
        res.status(200).json(pokemonById)
    } catch (error) {
        res.status(400).send(`El id: ${id} no corresponde a un Pokemon existente`)
    }
    
})


router.post('/pokemons', async(req, res) => {
    const { name,hp,attack,defense,speed,height,weight,IdType1,IdType2} = req.body;
    if(![name,hp,attack,defense,speed,IdType1].every(Boolean)) return res.status(404).
    send("Falta enviar datos");
    try {
        const newPokemon = await createPokemon(name,hp,attack,defense,speed,height,weight,IdType1,IdType2);                 
        // res.status(200).send("Pokemon was created");
        res.status(200).json(newPokemon);
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
    
})

router.get('/types', async (req, res) => {
    try {
        const types = await getTypes();
        res.status(200).json(types)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
})
// router.post ('/newtype', async (req,res)=>{
//      try{
//         const{name}=req.body
//         const newType= await createType(name);
//         res.status(200).json(newType)
//     }
//     catch(error){
//         res.status(400).json({error:error.message})
//     }
// })

router.put('/types/:id', async (req, res) => {
    const {id}=req.params
    try {
        await docViewsHandler(id);
        res.status(200).json(types)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
})
























// router.get('/database', async (req, res) => {
    // try {
        //     const pokemonsDBB= await getPokemonsDBB();
        //     res.status(200).json(pokemonsDBB)
        // } catch (error) {
            //     res.status(400).json({error:error.message})
            // }
            // })
            
            
module.exports = router;
