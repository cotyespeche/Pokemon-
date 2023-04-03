const axios = require ('axios');
const { Pokemon, Type } = require ('../db')


  // ------------------------------- carga de poke API

    
      const apiInfo = async () => {

      const poke = []; 
      // { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, de cada iteracion me trae esto
      let pokeApi = "https://pokeapi.co/api/v2/pokemon"
      while (poke.length < 100) {
          const { data } = await axios.get(pokeApi);
          poke.push(...data.results); // el ... mete el objeto dentro del array para que no sea un array de array
          pokeApi = data.next; 
      };

      const resolvedPromises = await Promise.all(
          poke.map(async (obj) => {  
              const res = await axios.get(obj.url); // axios.get = promesa, se generan 60 llamados con axios dbido a la antidad de elementos que se mapean. Estas promesas son manejadas por promise.All
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
                types: pokemon.types.map(elem => elem.type.name).join(" "),
            };
          
          });
          // console.log(infoPokemons)
            if(!infoPokemons) throw Error ('Pokemon not found BE');
             return infoPokemons;
        }

        
      
      // -------------------------------  carga de poke DB

    const dbInfo= async () => {

      // Puede leer toda la tabla de la base de datos con el findAll 
          const pokemonsDB = await Pokemon.findAll({
              include: Type,
              
          });
          if (!pokemonsDB.length) {
            return []
          }

          let cleanPokemonsDB = pokemonsDB.map(pokemon => ({
            ...pokemon.toJSON(),
            types: pokemon.types.map(type => type.name).join(" ")
        }));
        return cleanPokemonsDB
        // console.log(cleanPokemonsDB.map(pokemon => pokemon.types)); respuesta => [ 'fighting' ]
          }



    // ------------------------------- concateno
    async function apiDb() {

      let apiPokemons = await apiInfo();
      let dbPokemons = await dbInfo(); 

      return [...dbPokemons,...apiPokemons];
  };
     
      


  module.exports= {
    apiInfo,
    dbInfo,
    apiDb
  };







  
  // [{
              //     model: Type,
              //     attributes: ["name"],
              //     through: { attributes: [] }
               
              // }]



  // En este caso, la información se representa como un objeto JavaScript, donde cada propiedad del objeto tiene un nombre y un valor. Aunque el objeto JavaScript y la cadena JSON se parecen en su estructura, la diferencia fundamental es que el objeto JavaScript es una estructura de datos en memoria de un programa, mientras que la cadena JSON es una representación serializada de un objeto que se puede enviar a través de la red o almacenar en un archivo.





