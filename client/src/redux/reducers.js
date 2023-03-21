import 
{ GET_ALL_POKEMONS,
GET_POKEMON_DETAIL,
CLEAN_POKEMON_DETAIL,
GET_POKEMON_BY_NAME,
DELETE_STATE,
ORDER_BY_NAME,
ORDER_BY_ATTACK,
GET_ALL_TYPES,
FILTER_BY_TYPE,
FILTER_BY_SOURCE
} 
from "./actionType"


const initialState= {
pokemons: [],
pokemonDetail: {},
copyPokemons: [],
types: []

}



export default function rootReducer (state=initialState, action) {



    switch (action.type) {
        case GET_ALL_POKEMONS:
            console.log(action.payload);
            return {
                ...state,
                pokemons: action.payload,
                copyPokemons: action.payload
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
                copyPokemons : action.payload
            }

        case DELETE_STATE:
           return {
            ...state,
            pokemons: []
           }

        case ORDER_BY_NAME:
            return {
                ...state,
                copyPokemons: [...state.copyPokemons].sort((a,b) => {
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
                copyPokemons: [...state.copyPokemons].sort((a, b) => {
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
                // let type=
                // action.payload === 'All'
                //     ? state.copyPokemons
                //     : state.copyPokemons?.filter(pokemon => pokemon.types?.includes(action.payload))
                // return {
                //     ...state,
                //     copyPokemons: type,
                    if (action.payload === "All") {
                                    return {
                                        ...state,
                                        pokemons: state.copyPokemons
                                    }
                                }
                                const filteredTypes = state.pokemons.filter((element) => 
                                    element.types?.includes(action.payload) ? element : null
                                )
                                return {
                                   ...state,
                                    copyPokemons: filteredTypes
                                
                                

            };


            // case FILTER_BY_SOURCE:
            //     let createdPokemons;
            //     if (action.payload === "Db") createdPokemons = [...state.pokemons].filter(pokemon => pokemon.createdAt);
            //     if (action.payload === "Api") createdPokemons = [...state.pokemons].filter(pokemon => !pokemon.createdAt);
    
            //     return {
            //         ...state,
            //         order: action.payload === "Reset" ? state.pokemons : createdPokemons
            //     };
                // let copyOrder= state.order;
                // let origin = action.payload;
    
                // if (origin === 'all') return { ...state, pokemons: copyOrder };
                // if (origin === 'db')
                //     copyOrder = copyOrder.filter((el) => el.createdInDb === true);
    
                // if (origin === 'api')
                //     copyOrder = copyOrder.filter((el) => el.createdInDb === false);
    
                // return {
                //     ...state,
                //     pokemons: copyOrder,
                // };
    
        default: 
        return {
            ...state
        }
            
    }



}
