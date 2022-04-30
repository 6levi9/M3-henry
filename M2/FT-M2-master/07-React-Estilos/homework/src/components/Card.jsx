import React from 'react';
import s from './card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.contentCard}>
      <button onClick={props.onClose} className={s.button}>X</button>
      <h4>{props.name}</h4>
    <div className={s.infoCard}>  
       <div>
        <p>Min</p>
        <p>{props.min}</p>
      </div>
      <div>  
       <p>Max</p>
        <p>{props.max}</p>
      </div>  
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt ="image not found"/>
    </div>
    </div>)
};