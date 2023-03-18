import React from "react"
import { Link } from "react-router-dom";
import style from './CardPokemon.modules.css'


const CardPokemon = ({ id, key, name,image, types }) => {
    return (
       
        <div className= {style.Div}>
            {/* <div className={style.Div1}> */}
            <Link to={`/detail/${id}`}className={style.Link}> 
                <h1>Name: {name}</h1>
                <img src={image} alt={name} style={{ borderRadius: '999999rem'}} />
                <p>Types: {types}</p>
            </Link>
        
        </div>
        
    )
}
export default CardPokemon;