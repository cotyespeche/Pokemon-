const { apiDb } = require ('./getAll')
const { Pokemon, type } = require ('../db')

const byId = async(id) => {
        const data = await apiDb();
    
        if (!data) throw Error ('data not faund')
        
        let pokemonById = data.filter(e => e.id == id)
       
        if (!pokemonById.length) throw Error ("No Pokemons with that id")
    
        return pokemonById

    }


module.exports= { byId };