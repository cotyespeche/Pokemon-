import { getPokemonDetail,cleanPokemonDetail } from "../../redux/action"
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './Detail.modules.css'
import { Link, useParams } from "react-router-dom";



const DetailPokemon = () => {

    const { id } = useParams()

    const dispatch= useDispatch()
    // const { name,image, life, attack, defense, speed, height, weight, types }= useSelector(state => state.pokemonDetail)
    const pokemon = useSelector(state => state.pokemonDetail)
    // const {name, flag, continent, capital, subregion, area, population}= useSelector(state => state.countryDetail)

    // useEffect(() => {
    //     dispatch(getPokemonDetail(id))

    //     return () => dispatch(cleanCountryDetail()) // cuando se desmonte el componente limpia 
    // }, [dispatch, id])
    useEffect(() => {
        dispatch(getPokemonDetail(id))
        return () => dispatch(cleanPokemonDetail())
    }, [dispatch, id])

    return (
        <div>
            <div className={style.container}>
  <Link to="/home">
    <button className={style.buttonBack}>BACK</button>
  </Link>

  {pokemon.length > 0 && (
    <div className={style.cardDetail}>
      <h4>Id: {pokemon[0]?.id ?? 'Data not found'}</h4>
      <h1>Name: {pokemon[0]?.name ?? 'Data not found'}</h1>
      <img src={pokemon[0]?.image ?? 'Data not found'} alt={pokemon.name} />
      <h3>Life: {pokemon[0]?.life ?? 'Data not found'}</h3>
      <h3>Attack: {pokemon[0]?.attack ?? 'Data not found'}</h3>
      <h3>Defense: {pokemon[0]?.defense ?? 'Data not found'}</h3>
      <h3>Speed: {pokemon[0]?.speed ?? 'Data not found'}</h3>
      <h3>Height: {pokemon[0]?.height ?? 'Data not found'}</h3>
      <h3>Weight: {pokemon[0]?.weight ?? 'Data not found'}</h3>
      <h3>Types: {pokemon[0]?.types ?? 'Data not found'}</h3>
    </div>
  )}
</div>
 </div>
        
 )
}


export default DetailPokemon;