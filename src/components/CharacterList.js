import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  const [char, setChar] = useState([]);
  const [data, setData] = useState([]);

  const searchFn = searchData => {
    setData(searchData);
  }

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setChar(res.data.results);
      setData(res.data.results);
      console.log(res.data.results);
      console.log(res);
    })
    .catch(err => {
      console.error('Error in getting schwifty!', err)
    });
  }, []);
  console.log(char);


  return(
    <div>
      <div className='nav-container'>
      <Link to="/">Home</Link>
      <SearchForm search={searchFn} char={char} />
      <h1>The Usual Suspects</h1>
      </div>
    <section className='character-list'>
      {data.map(char => {
        return <CharacterCard
        key={char.id}
        name={char.name}
        image={char.image}
        gender={char.gender}
        species={char.species}
        />
      })}
    </section>
    </div>
  )
};
