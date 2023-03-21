import { getPokemonDetail,cleanPokemonDetail } from "../../redux/action"
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './Detail.module.css'
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



 

    <div className={style.cardDetail}>

     <h3 className={style.name}>Name: {pokemon?.name ?? 'Data not found'}</h3>
      <img className={style.img} src={pokemon?.image ?? 'Data not found'} alt={pokemon.name} />
      <div className={style.info}>
      <h4>Life: {pokemon?.life ?? 'Data not found'}</h4>
      <h4>Attack: {pokemon?.attack ?? 'Data not found'}</h4>
      <h4>Defense: {pokemon?.defense ?? 'Data not found'}</h4>
      <h4>Speed: {pokemon?.speed ?? 'Data not found'}</h4>
      <h4>Height: {pokemon?.height ?? 'Data not found'}</h4>
      <h4>Weight: {pokemon?.weight ?? 'Data not found'}</h4>
      <h4>Types: {pokemon?.types ?? 'Data not found'}</h4>

  {/* {pokemon.length > 0 && (

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
      <h4>Types: {pokemon[0]?.types ?? 'Data not found'}</h4> */}
    </div>
    </div>
    
  {/* )} */}
</div>
 </div>
        
 )
}


export default DetailPokemon;