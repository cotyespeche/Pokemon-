import 
{ GET_ALL_POKEMONS,
GET_POKEMON_DETAIL,
CLEAN_POKEMON_DETAIL
// GET_POKEMON_BY_NAME 
} 
from "./actionType"


const initialState= {
pokemons: [],
pokemonDetail: {},

}



export default function rootReducer (state=initialState, action) {



    switch (action.type) {
        case GET_ALL_POKEMONS:
            console.log(action.payload);
            return {
                ...state,
                pokemons: action.payload
            }
            
        case GET_POKEMON_DETAIL:
                    return {
                        ...state,
                        pokemonDetail: action.payload
        
                    }


        case CLEAN_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }
    
        default: 
        return {
            ...state
        }
            
    }



}
