import axios from 'axios'

export const POKEMON_ACTIONS = {
    GET_POKEMON: 'GET_POKEMON',
    GET_POKEMON_ERROR: 'GET_POKEMON_ERROR'
}


export function getPokemon() {

    return (dispatch,getState) => {
        const url = `https://pokeapi.co/api/v2/pokemon`

        //use a callback chain
        axios.get(url).then(resp=>{
            console.log({resp})

            //dispatch the action object to the store
            //generally contains a type and data payload
            dispatch({
                type: POKEMON_ACTIONS.GET_POKEMON,
                data: resp.data.results
            })

        }).catch(err=>{
            //Generic error catch, we can use status codes or error codes in a 4xx response to determine specific errors
            dispatch({
                type: POKEMON_ACTIONS.GET_POKEMON_ERROR
            })

        })
    }


}