import { GET_ALL_POKEMONS,
     GET_POKEMON_DETAIL,
     CLEAN_POKEMON_DETAIL,
     GET_POKEMON_BY_NAME,
     DELETE_STATE,
     ORDER_BY_NAME,
     ORDER_BY_ATTACK,
     GET_ALL_TYPES,
     FILTER_BY_TYPE,
     FILTER_BY_SOURCE
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
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            // const pedido= response.data
            dispatch({
                type: GET_POKEMON_BY_NAME ,
                payload: response.data
            })

        } catch (error) {
            window.alert("Pokemon not found!")
        }
    }
  }

  export const deleteState=() => {
    return { type: DELETE_STATE }
  }
  
  export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
  }
  
  export const orderByAttack = (payload) => {
    return {
        type: ORDER_BY_ATTACK,
        payload
    }
  }

  export const getAllTypes= () => {
    return async function (dispatch) {
      const apiDataTypes = await axios(
          "http://localhost:3001/types"
      );
      dispatch({
        type: GET_ALL_TYPES ,
        payload: apiDataTypes.data
    })
  }
}

export const filterByType = (type) => {
  return { type: FILTER_BY_TYPE, payload: type }
};

export const filterBySource = (payload) => {
return {
  type: FILTER_BY_SOURCE,
  payload: payload
}
}