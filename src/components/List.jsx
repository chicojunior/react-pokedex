import React, { Component } from 'react';

import axios from 'axios';

import Card from './Card';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokemonList: [],
    };
  }

  componentDidMount() {
    this.setState({ pokemonList: this.props.allPokemons });
  }

  componentDidUpdate(prevProps) {
    if (this.props.allPokemons.length !== prevProps) {
      this.getPokemonDetails();
    }
  }

  getPokemonDetails = () => {
    let pok = {};
    const request = this.props.allPokemons.map((pokemon) =>
      axios.get(pokemon.url)
    );
    axios.all(request).then((pokemons) =>
      pokemons.map((pokemon) => {
        const { name, url, abilities } = pokemon.data;

        this.setState({
          pokemon: pokemon.data,
          pokemonList: [...this.state.pokemonList, { name, url, abilities }],
        });

        this.getAbilities();
      })
    );
  };

  getAbilities = () => {
    // const req = this.state.pokemon.abilities.map(
    //   async (ability) => await axios.get(ability.url)
    // );
    // console.log(req.data);
  };

  render() {
    return this.props.allPokemons.length ? (
      <div>
        {this.props.allPokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    ) : null;
  }
}

export default List;
