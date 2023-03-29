const { Type, Pokemon } = require ('../db')
const axios =require('axios')


const getAllTypes = async () => {
    try {

        const apiTypes = await axios.get('https://pokeapi.co/api/v2/type');
        // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", apiTypes.data)
        await Promise.all(
            apiTypes.data.results.map(type => {
                
                let typeToFindOrCreate = {
                    
                    name: type.name
                };
                let { name } = typeToFindOrCreate  // consultar el { name }
                Type.findOrCreate({ where: { name } })  // creo una instancia de tabla en cada vuelta del mapeo a traves de la propiedad name
            })
        );
        
    } catch (error) {
        return error.message
        // return error.message
    }
   
        let allTypes= await Type.findAll();
        if (!allTypes.length) throw Error ("No Types in Database")
        return allTypes; // la de mi db name/id
    
    




    // try 
    // {
    //     const typesList = await Type.findAll();
        
    //     if (typesList.length === 0) {
    //         // cargar primera vez Types de Pokemon a DB
    //         try{
    //             const response = await axios.get('https://pokeapi.co/api/v2/type');
    //             const typesList = response.data.results.map((t) => {
    //                                         return { name: t.name }
    //                                         });
    //             await Type.bulkCreate(typesList);
    //             // res.status(200).json(typesList);
    //         }
    //         catch(error){
    //             next(error);    
    //         }
    //     }
    //     else {
    //         console.log('tipos cargados de la base de datos');
    //         // return res.status(200).json(typesList); /// returm types
    //     }
    // } 
    // catch (error)
    // {
    //     next(error);
    // }













}

// const saveApiDataType= async() =>{

//     try {
//         const response = await axios('https://pokeapi.co/api/v2/type');
//         await Promise.all(
//             response.data.results.map(type => {
//                 let typeToFindOrCreate = {
//                     id: type.id,
//                     name: type.name
//                 };
//                 let { name } = typeToFindOrCreate
//                 Type.findOrCreate({ where: { name } })
//             })
//         );
//     } catch (error) {
//         return error.message
//     }
// }




module.exports ={ getAllTypes };