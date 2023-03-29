const { Router } = require('express');
const router = Router();
const {apiInfo, dbInfo, apiDb} = require ('../constrollers/getAll')
const { postPokemon } = require ("../constrollers/post")
const { byName } = require ('../constrollers/getByName')
const { byId } = require ('../constrollers/getById')
const { Pokemon, Type } = require ('../db')



router.get('/getAll', async(req, res) =>{
  try {
    const getAllPokemons = await apiDb()
    res.status(200).json(getAllPokemons)
  } catch (error) {
    res.status(404).send({error: error.message})
  }

})

router.get('/', async(req, res) =>{
    try {
      const { name } = req.query;
     
        const pokemonByName= await byName(name)
        res.status(200).json(pokemonByName)
     
    } catch (error) {
      res.status(404).send({error: error.message})
    } 
    })




router.get('/:id', async(req, res) =>{
    const { id } = req.params;
    try {
      const pokemonId = await byId(id)
      res.status(200).json(pokemonId)
    } catch (error) {
      res.status(404).send({error: error.message})
    }
            
})


////////////////////////////////////////////// P O S T ////////////////////////////////////////////////////

     
router.post('/create', async(req, res) =>{


  try {
    const pokemonPost = await postPokemon(req.body);
    if (!pokemonPost) throw Error ('Pokemon not found');
    res.status(200).json(pokemonPost);

  } catch (error) {
      res.status(404).send({error: error.message})
  }
})


        // const  { name, image, life, attack, defense, speed, height, weight, types } = req.body
      // const newPokemon= await postPokemon(name, image, life, attack, defense, speed, height, weight, types)  



router.delete('/:id', async(req, res) =>{
  const { id } = req.params
  try {
    const deletePoke= await Pokemon.findByPk(id)
    deletePoke.destroy()
    res.status(200).json(deletePoke)
  } catch (error) {
    res.status(404).send({error: error.message})
  }
});

module.exports= router;
              