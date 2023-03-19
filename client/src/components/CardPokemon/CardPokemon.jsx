import React from "react"
import { Link } from "react-router-dom";
import style from './CardPokemon.module.css'


const CardPokemon = ({ id, key, name,image, types }) => {
    return (
       
        <div className= {style.card}>
            {/* <div className={style.Div1}> */}
            <Link to={`/detail/${id}`}className={style.link}> 
                <h1 className={style.name}>Name: {name}</h1>
                {/* <img clasname={style.img} src={image} alt={name} /> */}
                <p className={style.types}>Types: {types}</p>
            </Link>
            <img clasname={style.img} src={image} alt={name} />

        
        </div>
        
    )
}
export default CardPokemon;