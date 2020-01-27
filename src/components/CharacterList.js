import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setChar(res.data.results);
      console.log(res.data.results);
      console.log(res);
    })
    .catch(err => {
      console.error('Error in getting schwifty!', err)
    });
  }, []);
  console.log(char);


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
