import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonByName, getAllPokemons, deleteState } from "../../redux/action";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.copyPokemons)
;

  const [name, setName] = useState("");
 

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    // console.log('pokemonnnnnnnnnnnnnnnnn', pokemon)
    // setTimeout(() => {},1000)
    
    setName(""); // cambia el valor delestado. el input actualiza su value (borra lo escrito)
  }
  const deleteSearch = () => {
    dispatch(deleteState());
    dispatch(getAllPokemons());
  };



  return (
    
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="Search..."
        value={name} // es mi estado
        onChange={(e) => handleInputChange(e)} // cada vez que se escribe una letra cambia ...
        // onKeyDown={handleKeyDown}
      />
      <button
        className={style.button}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        🔍︎
      </button>

      <Link to="/home">
        <button onClick={deleteSearch} className={style.btn}>
          Delete Search
        </button>
      </Link>
     
    </div>
  );
}
