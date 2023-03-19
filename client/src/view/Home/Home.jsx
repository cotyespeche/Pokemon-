import React from 'react'
// import style from './Home.modules.css'
import AllCardsPokemons from '../../components/AllCardsPokemons/AllCardsPokemons'
import { getAllPokemons } from '../../redux/action';
import { useEffect, useState } from 'react';
import Paginado from '../../components/Paginado/Paginado';

import { useDispatch, useSelector } from 'react-redux'
import style from './Home.module.css'
// import home from '../../img/'
// import img from '../../img/home.png'



const Home = () => {

const dispatch= useDispatch()
const pokemones = useSelector((state) => state.pokemons);

  useEffect (()=>{  
    dispatch(getAllPokemons())
    },[dispatch])
   

 

      return (
  
        // <div>
         
           <div className= {style.home}>
        
            {/* <img src={img} alt={img}></img> */}
               {/* <video autoPlay muted loop className={style.videoHome}>
             <source src={beach} type="video/mp4"></source>
            </video> */} 
            <AllCardsPokemons />
          
          </div>
          // </div>
      )
  }
  
  
  export default Home;