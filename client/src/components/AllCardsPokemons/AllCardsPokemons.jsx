import React from 'react'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { getAllPokemons } from '../../redux/action';
import CardPokemon from '../CardPokemon/CardPokemon';
import style from './AllCardsPokemons.module.css'


const AllCardsPokemons = () => {
    // const dispatch= useDispatch
    const pokemons = useSelector(state => state.copyPokemons)


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const pages = [];
    for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
        pages.push(i);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    };

    const renderPageNumbers = pages.map(number => {
        return (
            <button className={style.listItem} key={number} id={number} onClick={handleClick}>
                {number}
            </button>
        )
    });
//     <div className={style.ulContainer}>
//     <ul className={style.unorganizedList}>{renderPageNumbers}</ul>
// </div>

        return (
            <div>
            
            <div className={style.AllCards}>
                
               
            {/* {pokemons.length > 0 ? pokemons.map(element=>  */}
            {pokemons.length > 0 ? currentItems.map(element=> 
            <CardPokemon
            key= {element?.id}
            id= {element?.id}
            name= {element?.name}
            image= {element?.image}
            types= {element?.types}
            />
            
            )
            : <h1>Loading...</h1>}
           </div>
           <ul className={style.unorganizedList}>{renderPageNumbers}</ul>
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