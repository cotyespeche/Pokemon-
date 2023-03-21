const { apiDb } = require ('./getAll')
const { Pokemon, type } = require ('../db')

const byId = async(id) => {
        const data = await apiDb();
    
        if (!data) throw Error ('data not found')
        
        // let pokemonById = data.filter(e => e.id == id)
        let pokemonById = data.find(e => e.id == id) // ahora me devuelve un objeto 
       
        // if (!pokemonById.length) throw Error ("No Pokemons with that id")
        if (!pokemonById) throw Error ("No Pokemons with that id")
    
        return pokemonById

    }


module.exports= { byId };