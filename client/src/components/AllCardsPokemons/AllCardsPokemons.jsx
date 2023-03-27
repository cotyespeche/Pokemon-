import React from "react";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import { getAllPokemons } from '../../redux/action';
import CardPokemon from "../CardPokemon/CardPokemon";
import gif from "../../img/Loading.gif";
import style from "./AllCardsPokemons.module.css";

const AllCardsPokemons = () => {
  // const dispatch= useDispatch
  const pokemons = useSelector((state) => state.copyPokemons);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); //  cantidad de tiempo que se muestre el GIF
    return () => clearTimeout(timer);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const pages = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    const activePage = currentPage;
    return (
      <button
        className={`${style.listItem} ${activePage === number && style.active}`} // Agregamos la clase "active" si el número actual de página es igual al número de la página actual
        key={number}
        id={number}
        onClick={handleClick}
      >
        {number}
      </button>
    );
  });

  return (
    <div>
      <div className={style.AllCards}>
        {pokemons.length > 0 ? (
          currentItems.map((element) => (
            <CardPokemon
              key={element?.id}
              id={element?.id}
              name={element?.name}
              image={element?.image}
              types={element?.types}
            />
          ))
        ) : (
          //   <h1>Loading...</h1>
          <div class="loading">
            <img src={gif} alt="Loading..." />
          </div>
        )}
      </div>
     
            <div className={style.pagination}>
        <button
          className={style.prevButton}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◀
        </button>
        <ul className={`${style.unorganizedList} ${style.paginationContainer}`}>
          {renderPageNumbers}
        </ul>
        <button
          className={style.nextButton}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pages.length}
        >
          ▶
        </button>
      </div> 
    </div>
  );
};

export default AllCardsPokemons;

// Al botón "Prev" se le asigna la función handlePrevClick, que disminuye en 1 el valor de currentPage si este es mayor a 1. Al botón "Next" se le asigna la función handleNextClick, que aumenta en 1 el valor de currentPage si este es menor al número de páginas disponibles (pages.length).

// También se agrega la propiedad disabled a cada botón, que se encarga de desactivar el botón si no se puede navegar a la página correspondiente (por ejemplo, si se está en la primera página y se presiona el botón "Prev", este queda desactivado).

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

//     <div className={style.ulContainer}>
//     <ul className={style.unorganizedList}>{renderPageNumbers}</ul>
// </div>

// return (
//     <div>

//     <div className={style.AllCards}>

//     {/* {pokemons.length > 0 ? pokemons.map(element=>  */}
//     {pokemons.length > 0 ? currentItems.map(element=>
//     <CardPokemon
//     key= {element?.id}
//     id= {element?.id}
//     name= {element?.name}
//     image= {element?.image}
//     types= {element?.types}
//     />

//     )
//     : <h1>Loading...</h1>}
//    </div>
//    <ul className={style.unorganizedList}>{renderPageNumbers}</ul>
//     </div>
// )
// const currentPageNumber = currentPage;
