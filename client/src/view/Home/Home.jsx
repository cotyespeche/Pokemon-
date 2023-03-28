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
   const pokemon = useSelector(state => state.copyPokemons);
const dispatch= useDispatch()


  useEffect (()=>{  
    dispatch(getAllPokemons())
    },[dispatch])
   
    // const PokemonList = () => {
   

    
      return (
  
        
            <div className= {style.home}>
                       
              <AllCardsPokemons />
              
            </div>
            
      
      )
  }

  
  
  export default Home;