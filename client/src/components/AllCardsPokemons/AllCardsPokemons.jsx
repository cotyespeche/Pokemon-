import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import gif from "../../img/Loading.gif";
import style from "./AllCardsPokemons.module.css";



const AllCardsPokemons = () => {
  const pokemons = useSelector((state) => state.copyPokemons);
  const dispatch=useDispatch()

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); //  cantidad de tiempo que se muestre el GIF
    return () => clearTimeout(timer);
  }, []);


  const [currentPage, setCurrentPage] = useState(1); //guarda el número de la página actual que se está mostrando en la interfaz y lo inicializa en 1.
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const pages = []; //se van agregando los números de página correspondientes a medida que se itera sobre el total de elementos dividiéndolo por el número de elementos por página.
  for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
    pages.push(i); //calculará el número total de páginas que necesitamos para mostrar todos los elementos en el array de pokemons.
  }
  const indexOfLastItem = currentPage * itemsPerPage; //1*12=12
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 12-12=0
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem); //(0, 12) devuelve un nuevo array que contiene los primeros 12 elementos de pokemons, que se muestran en la página actual.

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
          
          <div class="loading">
            <img src={gif} alt="Loading..." />
            {/* {!pokemons.length && <h3>No se hallaron resultados.</h3>} */}
          </div>
        )}

      </div>

          {/* //////////PREV /////// */}
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

       
        
             {/* ///////////// NEXT ////////////// */}
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
