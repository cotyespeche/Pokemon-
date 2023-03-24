import React from "react"
import { Link } from "react-router-dom";
import style from './CardPokemon.module.css'


const CardPokemon = ({ id, name,image, types }) => {
    return (
       
        <div className= {style.card}>
            
            <Link to={`/detail/${id}`}className={style.link}> 
                <h1 className={style.name}>Name: {name}</h1>
                <p className={style.types}>Types: {types}</p>
            </Link>
            <img className={style.img} src={image} alt={name} />

        
        </div>
        
    )
}
export default CardPokemon;