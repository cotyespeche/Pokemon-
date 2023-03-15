const { Pokemon, Type } = require ('../db')
const { axios } =require('axios');

   
        // const { name, image, life, attack, defense, speed, height, weight, types} = pokemon;
        
        //  if (!name || image || !life || !attack || !defense ) throw new Error("Missing information");

        // const newPokemon = { name, image, life, attack, defense, speed, height, weight };
        // let createdPokemon = await Pokemon.create(newPokemon);
        // createdPokemon.addTypes(types);
        // return newPokemon;
     

        const postPokemon = async (pokemon) => {
  
          const { name, image, life, attack, defense, speed, height, weight, types } = pokemon;
           if (!name || !image|| !life || !attack || !defense || !types) throw new Error("Missing information");
  
          const pokemonToPost = { name, image, life, attack, defense, speed, height, weight };
          let newPokemon = await Pokemon.create(pokemonToPost);
          newPokemon.addTypes(types)
          // res.send ('pokemon created successfully')
          
          return pokemonToPost
          
        };
	

	
       

    

        
        // if (!name || !life || !attack || !defense) throw new Error("Missing information");
        
        
        // const createPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight})
        // return createPokemon.addTypes(Types)
    


       // OTRA MANERA DE HACERLO 
        // let createPokemon = async (
        //     name,
        //     id,
        //     image,
        //     life,
        //     attack,
        //     defense,
        //     height,
        //     weight,
        //     types,
            
        // ) => {
        //     try {
        //         let findedPoke = await Pokemon.findOne({ where: { name: name } });
        //         if (findedPoke) {
        //             throw new Error('The name is used');
        //         }
        
        //         let newPokemon = await Pokemon.create({
        //             id: id,
        //             name: name,
        //             life: life,
        //             attack: attack,
        //             defense: defense,
        //             height: height,
        //             weight: weight,
        //             image: image ? image : 'https://images3.alphacoders.com/677/677583.png',
                   
        //         });
        
        //         let postTypes = await Type.findAll({ where: { name: types } });
        //         await newPokemon.addType(postTypes);
        
        //         return 'Successfully created pokemon';
        //     } catch (error) {
        //         return 'Error creating pokemon';
        //     }


module.exports = { postPokemon };