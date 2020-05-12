//must define initial for this store
import {POKEMON_ACTIONS }from '../actions/PokemonActions'
const initialState = {
    pokemonList : [],
    pokemonDetails: {

    }
}

//Reducer acts like a middleman, transforms the data before it reaches the store
export function PokemonReducer(state=initialState, action) {

    console.log({action})
    //use types to determine what happens to the data before we put it in the store 
    switch(action.type) {

        case POKEMON_ACTIONS.GET_POKEMON: {
            //Use spread state operator, we want to retain current state and only override one specific fields. You can nest spreading in subobjects as well.
            return {
                ...state,
                pokemonList: action.data

            }



        }

        //default should always return state. When your reducer encounters an unspecified action for the reducer we want to do nothing
        default:
            return state

    }



}