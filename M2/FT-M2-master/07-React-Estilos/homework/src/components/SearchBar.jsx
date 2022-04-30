import React from 'react';
import s from  './search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.bar}>
      <input type="text" placeholder="City..."/>
      <button onClick={() => props.onSearch("Buscando...")} className={s.button}>Search</button>
    </div>)
};