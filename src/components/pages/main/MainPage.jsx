import React from "react";
import "./MainPage.css";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import PokemonListContainer from './components/PokemonListContainer'
import DropdownMenu from '../../common/menu/DropdownMenu'

const MainPage = props => {
  return (
    <div className="main-page">
      <img
        className="logo"
        src="https://www.jing.fm/clipimg/full/216-2165911_pokemon-logo-png-pokemon-yellow-version-title-screen.png"
      />
      <div className='title-container'>
      <h1>Pokedex 1.0</h1>
      <h2>View a list of pokemon and their details.</h2>

      </div>
      <div className='filter-container'>
      <h2>Filter By:</h2>
      <DropdownMenu
        options={[
          {text: 'Metal', callback: ()=>{console.log('callback executed')}},
          {text: 'Dark', callback: ()=>console.log('option2')}]}
      />
      </div>
    <PokemonListContainer/>
    </div>
  );
};

export default MainPage;
