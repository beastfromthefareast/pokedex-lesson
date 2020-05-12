import React, { useEffect } from 'react'
import PokemonListView from './PokemonListView'
import { connect } from 'react-redux'
import { getPokemon } from '../../../../actions/PokemonActions'

const PokemonListContainer = (props) => {
    console.log({props})

    //Calls get pokemon on startup
    useEffect(() => {
        props.getPokemon()
    }, [])




    if (props.pokemonList && props.pokemonList.length > 0)
        return (<PokemonListView {...props} />)
    else
        return (<div><h3>The List is empty</h3></div>)
}

//Maps redux state data to props
//Subscribes to store changes. Rerenders when redux state changes
const mapStateToProps = (state) =>{ 
    console.log({state})
    
    return ({
    pokemonList: state.pokemon.pokemonList
})}

//Maps redux functions to our props
const mapDispatchToProps = (dispatch) => ({
    getPokemon: () => dispatch(getPokemon())
})

//Link redux state and functions to component
export default connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer)
