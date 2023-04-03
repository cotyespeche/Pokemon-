import React from "react"
import { Link } from "react-router-dom";
import style from './CardPokemon.module.css'



const CardPokemon = ({ id, name,image, types }) => {
    if (!name || !image || !types) {
        return <div className={style.card}>Sorry, we couldn't find that Pokémon.</div>;
    }

    return (
       
        <div className= {style.card}>
           
            
            <Link to={`/detail/${id}`}className={style.link}> 
                <h1 className={style.name}>Name: {name}</h1>
                <p className={style.types}>Types: {types}</p>
                
            </Link>
            <img className={style.img} src={image} alt={name} />

        
        </div>
        
    )
}






// const CardPokemon = ({ id, name, image, types, attack, defense }) => {
//     return (
//       <div className={style.card}>
//         <Link to={`/detail/${id}`} className={style.link}>
//           <h1 className={style.name}>
//             Name: {name ? name : 'Pokemon name not found'}
//           </h1>
//           <p className={style.types}>Types: {types}</p>
//           <p>Atacck: {attack}</p>
//           <p>Defense: {defense}</p>
//         </Link>
//         <img className={style.img} src={image} alt={name} />
//       </div>
//     );
//   };
  


// const CardPokemon = ({ pokemons }) => {
//     return (
//       <div>
//         {pokemons.length > 0 ? (
//           <div>
//             {pokemons.map((pokemon) => (
//               <CardPokemon
//                 key={pokemon.id}
//                 id={pokemon.id}
//                 name={pokemon.name}
//                 image={pokemon.image}
//                 types={pokemon.types}
//                 attack={pokemon.attack}
//                 defense={pokemon.defense}
//               />
//             ))}
//           </div>
//         ) : (
//           <p>No se encontraron Pokémon</p>
//         )}
//       </div>
//     );
//   };


export default CardPokemon;




// const dispatch=useDispatch()
    // if (!name){
    //     window.alert('Pokemon Name not found')
    //     dispatch(getAllPokemons())
    //   }