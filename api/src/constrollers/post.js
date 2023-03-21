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

           let findedPoke = await Pokemon.findOne({ where: { name: name } });
            if (findedPoke) {
            throw new Error('The name is used');
            } // lo puse arriba del try sino no me tome el catch

          try {
          
          const pokemonToPost = { name, image, life, attack, defense, speed, height, weight }; // creo un objeto con estas propiedades que va a ser usado para crear la instancia
          let newPokemon = await Pokemon.create(pokemonToPost); // Creo la instancia de Pokemon 
          newPokemon.addTypes(types) // relacion entre la instancia y los types
          
          return 'Successfully created pokemon';

          } catch (error) {
             return 'Error creating pokemon';
          }

		}
  
          

          // res.send ('pokemon created successfully')
       
          
    
	

	
       

    

        
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