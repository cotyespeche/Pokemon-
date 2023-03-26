import React from 'react'
import AllCardsPokemons from '../../components/AllCardsPokemons/AllCardsPokemons'
import { getAllPokemons, orderByName } from '../../redux/action';
import Filter from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import style from './Home.module.css'
// import img from '../../img/home.png'



const Home = () => {

const dispatch= useDispatch()


  useEffect (()=>{  
    dispatch(getAllPokemons())
    },[dispatch])
   

  
      return (
  
        
            <div className= {style.home}>
                       
              <AllCardsPokemons />
              {/* <img className={style.img} src={img} alt="img"></img>  */}
            </div>
       
      )
  }
  
  
  export default Home;