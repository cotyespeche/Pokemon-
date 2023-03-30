const { apiDb } = require ('./getAll')

const byId = async(id) => {
        const data = await apiDb();
    
        if (!data) throw Error ('data not found')
        
        
        let pokemonById = data.find(e => e.id == id) 
       
        if (!pokemonById) throw Error ("No Pokemons with that id")
    
        return pokemonById

    }


module.exports= { byId };