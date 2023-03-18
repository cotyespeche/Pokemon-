const axios = require ('axios');
const { Pokemon, Type } = require ('../db')


  // ------------------------------- carga de poke API

 
    //me devuelve los pokemons traidos con un name y una url de cada pokemon
      // const info =await axios.get('https://pokeapi.co/api/v2/pokemon')
  
      // //hago el axios pero a la sub url 
      // const subRequest= info.data.results.map(obj=> axios.get(obj.url))

      //     //llama a todas las sub url, solicitudes simultaneas 
      // const infoUrl= await axios.all(subRequest)

      //   //obtengo la data de cada pokemon por su suburl
      // let pokemons= infoUrl.map(obj => obj.data)



      const apiInfo = async () => {

      const poke = []; 
      // me guarda un array de objeroscon estos datos  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, de cada iteracion me tre su name y su url
      let pokeApi = "https://pokeapi.co/api/v2/pokemon"
      while (poke.length < 60) {
          const { data } = await axios.get(pokeApi);
          poke.push(...data.results); // el ... mete el objeto dentro del array para que no sea un array de array
          pokeApi = data.next; // ingresa al next que estan las otras 20 y asi 
      };

      const resolvedPromises = await Promise.all(
          poke.map(async (obj) => {  
              const res = await axios.get(obj.url); // axios.get = promesa, se generan 40 llamados con axios dbido a la antidad de elementos que se mapean. Estas promesas son manejadas por promise.All
              return res.data;
          
          })
      );
      // console.log(poke)
      // console.log(poke[0].url)
      

      const infoPokemons= resolvedPromises.map((pokemon) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default, //sprites
                life: pokemon.stats[0].base_stat, //stats
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types.map(elem => elem.type.name),
            };
          
          });
          // console.log(infoPokemons)
            if(!infoPokemons) throw Error ('Pokemon not found');
             return infoPokemons;
        }

        
      
      // -------------------------------  carga de poke DB

    const dbInfo= async () => {

      // Puede leer toda la tabla de la base de datos con el findAll 
          const pokemonsDB = await Pokemon.findAll({
              include: [{
                  model: Type,
                  attributes: ["name"],
                  through: { attributes: [] }
               
              }]
          });
          return pokemonsDB;
          }
          
    //     let cleanPokemonsDB = pokemonsDB.map(pokemon => ({
    //       ...pokemon.toJSON(),
    //       Types: pokemon.Types.map(type => type.name + " ")
    //    }));
    //    return cleanPokemonsDB
    // }
    


    
    // ------------------------------- concateno

        async function apiDb() {
          
            let apiPokemons = await apiInfo();
            let dbPokemons = await dbInfo(); 
            let concat = dbPokemons.concat(apiPokemons);
            if (!concat.length) throw Error ("no pokemon found")
            return concat;
          
        };
        
        //   return [...dbPokemons,...apiPokemons];
      


  module.exports= {
    apiInfo,
    dbInfo,
    apiDb
  };