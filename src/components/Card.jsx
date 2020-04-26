import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Card = (props) => {
  // const [pokemon, setPokemon] = useState({});
  // const [abilities, setAbilities] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(props.pokemon.url);
  //     setPokemon(response.data);
  //     if (response.data) {
  //       response.data.abilities.forEach(async (item) => {
  //         const response = await axios.get(item.ability.url);
  //         setAbilities([...abilities, response.data]);
  //       });
  //     }
  //   };
  //   fetchData();
  // }, []);

  return pokemon ? (
    <div>
      {/* <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={`${pokemon.name}`}
      />
      <p>Name: {pokemon.name}</p>
      <div>
        {abilities.length
          ? abilities.map((ability) => <p key={ability.id}>{ability.name}</p>)
          : null}
      </div> */}
    </div>
  ) : null;
};

export default Card;
