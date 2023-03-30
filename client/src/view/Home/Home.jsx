import React from "react";
import AllCardsPokemons from "../../components/AllCardsPokemons/AllCardsPokemons";
import { getAllPokemons } from "../../redux/action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./Home.module.css";


const Home = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);


  return (
    <div className={style.home}>
      <AllCardsPokemons />
    </div>
  );
};

export default Home;
