import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAN_POKEMON_DETAIL,
  GET_POKEMON_BY_NAME,
  DELETE_STATE,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  GET_ALL_TYPES,
  FILTER_BY_TYPE,
  FILTER_BY_SOURCE,
  POST_POKEMON,
 
} from "./actionType";


import axios from "axios";



//////////////////////////////////// GET ALL POKEMONS ///////////////////////////////////////////////////

export const getAllPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/pokemons/getAll");
      const pedido = response.data;
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: pedido,
      });
    } catch (error) {
      window.alert("Pokemons not found !");
    }
  };
};

//////////////////////////////////////// DETAIL ////////////////////////////////////////////////////////
export const getPokemonDetail = (id) => {
  return async function (dispatch) {
   
      const {data}= await axios.get(`http://localhost:3001/pokemons/${id}`)
  
        dispatch({
          type:GET_POKEMON_DETAIL,
          payload: data
      })
  };
};


export const cleanPokemonDetail = () => {
  return { type: CLEAN_POKEMON_DETAIL };
};

///////////////////////////////////////// BY NAME /////////////////////////////////////////////////////////

export const getPokemonByName = (name) => {
  return async (dispatch) => {
  
      dispatch({type: GET_POKEMON_BY_NAME, payload: name});
  }
}


export const deleteState = () => {
  return { type: DELETE_STATE };
};

///////////////////////////////////// ORDER BY NAME //////////////////////////////////////////////////////
export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

////////////////////////////////////////// ORDER BY ATTACK /////////////////////////////////////////////////
export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};




///////////////////////////////////////// GET ALL TYPES ////////////////////////////////////////////////////
export const getAllTypes = () => {
  return async function (dispatch) {
    const apiDataTypes = await axios("http://localhost:3001/types");
    dispatch({
      type: GET_ALL_TYPES,
      payload: apiDataTypes.data,
    });
  };
};

/////////////////////////////////////// FILTER BY TYPE ////////////////////////////////////////////////////
export const filterByType = (type) => {
  return { type: FILTER_BY_TYPE, payload: type };
};

///////////////////////////////////////// FILTER  BY SOURCE ////////////////////////////////////////////////
export const filterBySource = (payload) => {
  return {
    type: FILTER_BY_SOURCE,
    payload: payload,
  };
};

///////////////////////////////////////////// POST ///////////////////////////////////////////////////////

export const postPokemon= (form) => {
  return async function(dispatch){
    const {data} = await axios.post("http://localhost:3001/pokemons/create", form)
    return dispatch ({type: POST_POKEMON, payload: data}) 
    
  }
}







   

  





















// export const getPokemonByName = (name) => {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/pokemons?name=${name}`
//       );
//       console.log("aaaaaaaaaaaaaaaaaaaaaa", response);
//       // const pedido= response.data
//       dispatch({
//         type: GET_POKEMON_BY_NAME,
//         payload: response.data,
//       });
//     } catch (error) {
//       window.alert("Pokemon not found!");
//     }
//   };
// };