import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';

import List from './components/List';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      setPokemonList(response.data.results);
    };
    fetchData();
  }, []);

  return pokemonList ? (
    <div>
      <List list={pokemonList} />
    </div>
  ) : null;
}

export default App;
