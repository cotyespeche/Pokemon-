import { GET_ALL_POKEMONS,
     GET_POKEMON_DETAIL,
     CLEAN_POKEMON_DETAIL,
     GET_POKEMON_BY_NAME
     } from "./actionType";
import axios from 'axios'


export const getAllPokemons = ()=>{ 
    return async function(dispatch){ 
        try {
            const response= await axios("http://localhost:3001/pokemons/getAll")  
            const pedido= response.data
            dispatch({
                   type: GET_ALL_POKEMONS,
                   payload:pedido
        
                 })
                 
            } catch (error) {
                window.alert("Not found!")
               }
          
      }
  }


  export const getPokemonDetail = (id) => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
            const pedido= response.data
            dispatch({
                type:GET_POKEMON_DETAIL,
                payload: pedido
            })

        } catch (error) {
            window.alert("Id not found!")
        }
    }
  }


  export const cleanPokemonDetail= () => {
    return { type: CLEAN_POKEMON_DETAIL }
  }

  export const getPokemonByName = (name) => {
    return async function(dispatch) {
        try {
            const response = axios.get(`http://localhost:3001/pokemons/${name}`)
            const pedido= response.data
            dispatch({
                type: GET_POKEMON_BY_NAME ,
                payload: pedido
            })

        } catch (error) {
            window.alert("Pokemon not found!")
        }
    }
  }