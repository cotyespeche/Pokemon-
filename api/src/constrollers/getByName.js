const { Pokemon, Type} = require ('../db')
const { apiDb } = require ('./getAll');


const byName = async(name) => {
    const data = await apiDb();

    if (!data) throw Error ('data no faund')
    
    let pokemonByName = data.filter((pokemon) => 
    pokemon.name.toLowerCase()=== name.toLowerCase())

    if (!pokemonByName.length) throw Error ('Pokemon not faund')

    return pokemonByName
}

module.exports = { byName };


