import React from 'react'
import FlatList from 'flatlist-react';
import Card from '../../../common/card/Card'


const PokemonListView = (props) => {
  return (
    <ul>
      <FlatList
        renderItem={() => <Card />}
      />
    </ul>
  )
}

export default PokemonListView
