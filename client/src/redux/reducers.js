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

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  copyPokemons: [],
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      console.log(action.payload);
      return {
        ...state,
        pokemons: action.payload,
        copyPokemons: action.payload,
      };

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case CLEAN_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };

    case GET_POKEMON_BY_NAME:
      const foundPokemon = state.pokemons.filter(
        (pokemon) => pokemon.name === action.payload.toLowerCase()
      );
      return {
        ...state,
        copyPokemons: foundPokemon,
      };

    case DELETE_STATE:
      return {
        ...state,
        copyPokemons: [],
      };

    case ORDER_BY_NAME:
      // console.log('eeeeeeeeeee', state.copyPokemons)
      return {
        ...state,
        copyPokemons:
          action.payload === "A-Z"
            ? [
                ...state.copyPokemons.sort((a, b) =>
                  a.name.localeCompare(b.name)
                ),
              ] // acs
            : [
                ...state.copyPokemons.sort((a, b) =>
                  b.name.localeCompare(a.name)
                ),
              ],
      };

    case ORDER_BY_ATTACK:
      return {
        ...state,
        copyPokemons: [...state.copyPokemons].sort((a, b) => {
          if (action.payload === "- Attack") {
            if (a.attack < b.attack) return -1;
            if (a.attack > b.attack) return 1;
            return 0;
          } else {
            if (a.attack < b.attack) return 1;
            if (a.attack > b.attack) return -1;
            return 0;
          }
        }),
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case FILTER_BY_TYPE:
      let filtered = state.pokemons;
      if (action.payload !== "All") {
        filtered = state.pokemons.filter((poke) =>
          poke.types?.includes(action.payload)
        );
      }
      return {
        ...state,
        copyPokemons: filtered,
      };

    case FILTER_BY_SOURCE:
      let allPoke = state.pokemons;
      if (action.payload !== "allPoke") {
        allPoke =
          action.payload === "Api"
            ? allPoke.filter((poke) => typeof poke.id === "number")
            : allPoke.filter((poke) => typeof poke.id !== "number");
      }
      return {
        ...state,
        copyPokemons: [...allPoke],
      };

    case POST_POKEMON:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}













// La razón por la que state.copyPokemons está dentro de corchetes ([...state.copyPokemons]) es porque se está creando una copia del array state.copyPokemons.
// Cuando se utiliza el método sort() en un array, se realiza una modificación en el mismo array, en lugar de crear uno nuevo. Por lo tanto, si se desea mantener el array original sin cambios y ordenar una copia del mismo, se necesita crear una nueva instancia del array con los mismos elementos que el array original, de ahí el uso de la sintaxis de propagación ([...state.copyPokemons]), que crea una copia del array original.
// Al hacer esto, se asegura que el estado original no se modifique al aplicar la ordenación, lo que es importante en el contexto de una aplicación de React, ya que modificar directamente el estado original puede generar comportamientos inesperados y errores.
