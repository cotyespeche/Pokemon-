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

      const promises = [];
      let url = "https://pokeapi.co/api/v2/pokemon"
      while (promises.length < 40) {
          const { data } = await axios.get(url);
          promises.push(...data.results); // el ... mete el objeto dentro del array para que no sea un array de array
          url = data.next;
      };

      const resolvedPromises = await Promise.all(
          promises.map(async (promise) => {
              const res = await axios.get(promise.url);
              return res.data;
          })
      );
     

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
                types: pokemon.types.map(elem => elem.type.name + " "),
            };
          
          });
          
            if(!Pokemon) throw Error ('Pokemon not found');
             return infoPokemons;
        }


         // let url = 'https://pokeapi.co/api/v2/pokemon?limit=20';

      // while (url) {
      //   const { data } = await axios.get(url);
      //   resultados = resultados.concat(data.results);
      //   url = data.next;
      // }
      
      // -------------------------------  carga de poke DB

    const dbInfo= async () => {

        //  let pokemonsDB= []
          const pokemonsDB = await Pokemon.findAll({
              include: [{
                  model: Type,
                  attributes: ["name"],
                  through: { attributes: [] }
                  // through: { types: [] }
              }]
          });

          return pokemonsDB;
          
          // if (!pokemonsDB) {
              
              //  throw new Error("No pokemons found in DB")
              // return []
            
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
        // const dbInfo = async()=>{
        //   let apiPokemons = apiInfo()
        //   let dbPokemons = await dbInfo()
        //   return [...apiPokemons,...dbPokemons];
        // }


  module.exports= {
    apiInfo,
    dbInfo,
    apiDb
  };