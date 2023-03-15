// const { Pokemon, Type } = require ('../db')
// const { Op } = require("sequelize");


// const deletePokemon = async (id) => {

//     // const result = Pokemon.findAll({
//     //         where: {
//     //           id: {
//     //             [Op.eq]: id,
//     //           },
//     //         },
//     //       });
//     const deletePokem= await Pokemon.findByPk(id)
  
//     deletePokem.destroy()
//     // res.status(200).json(deletePokem)

//         //   await Pokemon.destroy({
//         //     where: {
//         //       id: id,
//         //     },
//         //   });
        
//         //   if (!id) throw Error ("could not delete")
//         //   return result;
//     // const data = dbInfo()
//     // if (!data) throw error(' Data no found')

//     // let dataFiltered= data.filter(pokemon => pokemon.id === id)
//     // if(!dataFiltered.length) throw error ('Id no found')
//     // return dataFiltered

// }

// module.exports= deletePokemon;