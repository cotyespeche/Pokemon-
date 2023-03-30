import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonByName, getAllPokemons, deleteState } from "../../redux/action";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
 

  const [name, setName] = useState("");
 

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    // console.log('pokemonnnnnnnnnnnnnnnnn', pokemon)
    setName(""); 
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
        placeholder="Search name..."
        value={name}
        onChange={(e) => handleInputChange(e)} // cada vez que se escribe una letra cambia ...
        
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
