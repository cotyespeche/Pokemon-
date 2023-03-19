import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, getAllPokemons} from '../../redux/action';
import style from './SearchBar.module.css'
import { Link } from 'react-router-dom'



export default function SearchBar (){

    const dispatch= useDispatch()
    const [name, setName]= useState("")
   




function handleInputChange(e){
    setName(e.target.value)
    
      
}

function handleSubmit(e){
    e.preventDefault()
    // console.log("click")
    dispatch(getPokemonByName(name))
    // console.log("click2")
    // console.log(name, "name")
    setName("")
   
    
}
// const deleteSearch = () => {
//     dispatch(deleteState())
//     dispatch(getAllPokemons())
// }

return(
  
        <div className={style.container}>
          <input
            className={style.input}
            type="text"
            placeholder="Search..."
            onChange= {(e)=> handleInputChange(e)}
            // onKeyDown={handleKeyDown}
          />
          <button
            className={style.boton}
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            🔍︎
          </button>

          {/* <Link to="/home">
                <button onClick={deleteSearch} className={style.btn} >Delete Search</button>
            </Link> */}
        </div>
      );
    };