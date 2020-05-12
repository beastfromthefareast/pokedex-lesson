import React from 'react'
import FlatList from 'flatlist-react';
import Card from '../../../common/card/Card'


const PokemonListView = (props) => {
  return (
    <ul>
      {
        props.pokemonList.map(p=>(<li>
          {p.name}
        </li>))
      }
    </ul>
  )
}

export default PokemonListView
