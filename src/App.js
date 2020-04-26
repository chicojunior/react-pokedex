import React, { Component } from 'react';

import axios from 'axios';

import './App.css';

import List from './components/List';

class App extends Component {
  state = {
    allPokemons: [],
  };

  componentDidMount() {
    const fetchData = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      this.setState({ allPokemons: response.data.results });
    };
    fetchData();
  }

  render() {
    return this.state.allPokemons ? (
      <div>
        <List allPokemons={this.state.allPokemons} />
      </div>
    ) : null;
  }
}

export default App;
