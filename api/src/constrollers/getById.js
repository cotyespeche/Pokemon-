const { apiDb, apiInfo } = require ('./getAll')

const byId = async(id) => {
        const data = await apiDb();
    
        if (!data) throw Error ('data no faund')
        
        let pokemonById = data.filter(e => e.id == id)
    
        if (!pokemonById.length) throw Error ('PokemonId no faund')
    
        return pokemonById
    }


module.exports= { byId };