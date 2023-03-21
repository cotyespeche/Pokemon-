import 
{ GET_ALL_POKEMONS,
GET_POKEMON_DETAIL,
CLEAN_POKEMON_DETAIL,
GET_POKEMON_BY_NAME,
DELETE_STATE,
ORDER_BY_NAME,
ORDER_BY_ATTACK,
GET_ALL_TYPES,
FILTER_BY_TYPE
} 
from "./actionType"


const initialState= {
pokemons: [],
pokemonDetail: {},
order: [],
types: []

}



export default function rootReducer (state=initialState, action) {



    switch (action.type) {
        case GET_ALL_POKEMONS:
            console.log(action.payload);
            return {
                ...state,
                pokemons: action.payload,
                order: action.payload
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

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons : action.payload
            }

        case DELETE_STATE:
           return {
            ...state,
            pokemons: []
           }

        case ORDER_BY_NAME:
            return {
                ...state,
                pokemons: [...state.pokemons].sort((a,b) => {
                    if (action.payload === 'Ascendent') {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    } else { 
                        if (a.name < b.name) return 1;
                        if (a.name > b.name) return -1;
                        return 0;
                    }
                }
                )
            }

        case ORDER_BY_ATTACK:
           return {
                ...state,
                pokemons: [...state.pokemons].sort((a, b) => {
                    if (action.payload === "Ascendent") {
                        if (a.attack < b.attack) return -1;
                        if (a.attack > b.attack) return 1;
                        return 0;
                    } else { 
                        if (a.attack < b.attack) return 1;
                        if (a.attack > b.attack) return -1;
                        return 0;
                    }
                }),
            }
                // let aux = state.pokemons
                // let sorted = action.payload === "Ascendent"
                // ? aux.sort((a,b) => a.attack - b.attack)
                // : aux.sort((a,b) => b.attack - a.attack)
                // return{
                //   ...state,
                //   pokemons: sorted,
                // }


            case GET_ALL_TYPES:
                    return {
                        ...state,
                        types: action.payload
                    }

            
            case FILTER_BY_TYPE:
                 return {
                ...state,
                order: state.pokemons.filter(pokemon => pokemon.Types.includes(action.payload))
            };
        
    
        default: 
        return {
            ...state
        }
            
    }



}
