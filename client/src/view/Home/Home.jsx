import React from 'react'
import AllCardsPokemons from '../../components/AllCardsPokemons/AllCardsPokemons'
import { getAllPokemons, orderByName } from '../../redux/action';
import Filter from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import style from './Home.module.css'
// import img from '../../img/home.png'
import { deletePokemon } from '../../redux/action';



const Home = () => {

const dispatch= useDispatch()


  useEffect (()=>{  
    dispatch(getAllPokemons())
    },[dispatch])
   
    // const PokemonList = () => {
    //   const pokemon = useSelector(state => state.copyPokemons);

    
      return (
  
        
            <div className= {style.home}>
                       
              <AllCardsPokemons />
              {/* <img className={style.img} src={img} alt="img"></img>  */}
              {/* <button onClick={() => handleDelete(poke.id)}>Delete</button> */}
            </div>
            
       
      )
  }

  
  
  export default Home;