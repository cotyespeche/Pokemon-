const { Pokemon, Type } = require ('../db')
const { axios } =require('axios');

const postPokemon = async (pokemon) => {
  
        const { name, image, life, attack, defense, speed, height, weight, Types } = pokemon;
         if (!name || !life || !attack || !defense) throw new Error("Missing information");

        const pokemonToPost = { name, image, life, attack, defense, speed, height, weight };
        let newPokemon = await Pokemon.create(pokemonToPost);
        newPokemon.addTypes(Types)
        // res.send ('pokemon created successfully')
        
        return pokemonToPost;
    };
    

        
        // if (!name || !life || !attack || !defense) throw new Error("Missing information");
        
        
        // const createPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight})
        // return createPokemon.addTypes(Types)
    


module.exports ={ postPokemon };