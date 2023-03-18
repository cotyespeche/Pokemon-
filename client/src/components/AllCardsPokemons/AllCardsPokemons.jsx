import React from 'react'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { getAllPokemons } from '../../redux/action';
import CardPokemon from '../CardPokemon/CardPokemon';
import style from './AllCardsPokemons.modules.css'


const AllCardsPokemons = () => {
    // const dispatch= useDispatch
    const pokemons = useSelector(state => state.pokemons)


        return (
            <div className={style.AllCards}>
            {pokemons.length > 0 ? pokemons.map(element=> 
            <CardPokemon
            id= {element?.id}
            key= {element?.id}
            name= {element?.name}
            image= {element?.image}
            types= {element?.types}

            >
            </CardPokemon>
            )
            : <h1>Loading...</h1>}
           </div>
            
        )


}

export default AllCardsPokemons;
// id: pokemon.id,
// name: pokemon.name,
// image: pokemon.sprites.other.dream_world.front_default, //sprites
// life: pokemon.stats[0].base_stat, //stats
// attack: pokemon.stats[1].base_stat,
// defense: pokemon.stats[2].base_stat,
// speed: pokemon.stats[5].base_stat,
// height: pokemon.height,
// weight: pokemon.weight,
// types: pokemon.types.map(elem => elem.type.name)