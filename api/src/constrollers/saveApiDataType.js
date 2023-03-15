const axios = require ("axios");
const { Type } = require ("../db");

const saveApiDataType= async() =>{

    // try {
    //     const response = await axios('https://pokeapi.co/api/v2/type');
    //     await Promise.all(
    //         response.data.results.map(type => {
    //             let typeToFindOrCreate = {
    //                 id: type.id,
    //                 name: type.name
    //             };
    //             let { name } = typeToFindOrCreate
    //             Type.findOrCreate({ where: { name } })
    //         })
    //     );
    // } catch (error) {
    //     return error.message
    // }
}
 
    //     try {
    //         const allTypes = await Type.findAll()
    //         console.log(allTypes, "Todos los tipos")
    //         if (allTypes.length > 0) {
    //             console.log("entro al if")
    //             return null
    //         }
    //         const reqType = await axios.get("https://pokeapi.co/api/v2/type")
    //         console.log("Request de tipos") //llamado a la api
    //         const resType = reqType.data.results
    //         console.log(resType, "Tipos")
    //         resType.map(e => {
    //             Type.create({
    //                 name: e.name
    //             })
    //             /* console.log({name: e.name}) */
    //         })
    
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    // saveApiDataType()


//     try {
//         const response= await axios("https://pokeapi.co/api/v2/type")
//         await Promise.all(
//             response.data.results.map(type => {
//                 let typeFindOrCreate = {
//                     id: type.id,
//                     name: type.name
//                 };
//                 let { name } = typeFindOrCreate
//                 Type.typeFindOrCreate({ where: { name }})
//                 res.send('CARGANDOOOOOO')
//             })
           
//         );
//     } catch (error) {
//         return error.message
//     }
// // }
module.exports = { saveApiDataType };