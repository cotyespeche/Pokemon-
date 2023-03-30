const { Type, Pokemon } = require ('../db')
const axios =require('axios')


const getAllTypes = async () => {
    try {

        const apiTypes = await axios.get('https://pokeapi.co/api/v2/type');
        // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", apiTypes.data)
        await Promise.all(
            apiTypes.data.results.map(type => {
                
                let typeCreate = {
                    
                    name: type.name
                };
                let { name } = typeCreate  
                Type.findOrCreate({ where: { name } })  // creo una instancia de tabla en cada vuelta del mapeo a traves de la propiedad name
            })
        );
        
    } catch (error) {
        return error.message
        
    }
        let allTypes= await Type.findAll();
        if (!allTypes.length) throw Error ("No Types in Database")
        return allTypes; // la de mi db name/id
    
}






module.exports ={ getAllTypes };