import { getPokemonDetail, cleanPokemonDetail } from "../../redux/action";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import gif from "../../img/Loading.gif";

const DetailPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => dispatch(cleanPokemonDetail());
  }, [dispatch, id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Verifica si todas las variables de estado están establecidas
  if (
    !pokemon.name ||
    !pokemon.id ||
    !pokemon.life ||
    !pokemon.image ||
    !pokemon.attack ||
    !pokemon.defense ||
    !pokemon.speed ||
    !pokemon.height ||
    !pokemon.weight ||
    !pokemon.types
  ) {
    return (
      <div className={style.loading}>
        <div>
          <img src={gif} alt="Loading..." className={style.gif} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={style.container}>
        <Link to="/home">
          <button className={style.buttonBack}>BACK</button>
        </Link>

        <div className={style.cardDetail}>
          <img className={style.img} src={pokemon?.image} alt={pokemon.name} />

          <div className={style.info}>
            <h3 className={style.name}>Name: {pokemon?.name}</h3>
            <h4>Id: {pokemon?.id}</h4>
            <h4>Life: {pokemon?.life}</h4>
            <h4>Attack: {pokemon?.attack}</h4>
            <h4>Defense: {pokemon?.defense}</h4>
            <h4>Speed: {pokemon?.speed}</h4>
            <h4>Height: {pokemon?.height}</h4>
            <h4>Weight: {pokemon?.weight}</h4>
            <h4>Types: {pokemon?.types}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPokemon;













{
  /* {pokemon.length > 0 && (

    <div className={style.cardDetail}>

     <h3 className={style.name}>Name: {pokemon[0]?.name ?? 'Data not found'}</h3>
      <img className={style.img} src={pokemon[0]?.image ?? 'Data not found'} alt={pokemon.name} />
      <div className={style.info}>
      <h4>Life: {pokemon[0]?.life ?? 'Data not found'}</h4>
      <h4>Attack: {pokemon[0]?.attack ?? 'Data not found'}</h4>
      <h4>Defense: {pokemon[0]?.defense ?? 'Data not found'}</h4>
      <h4>Speed: {pokemon[0]?.speed ?? 'Data not found'}</h4>
      <h4>Height: {pokemon[0]?.height ?? 'Data not found'}</h4>
      <h4>Weight: {pokemon[0]?.weight ?? 'Data not found'}</h4>
      <h4>Types: {pokemon[0]?.types ?? 'Data not found'}</h4> */
}

{
  /* )} */
}
