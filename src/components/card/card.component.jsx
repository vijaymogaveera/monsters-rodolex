import React from 'react';
import "./card.style.css"

export const Card = (props) =>(
   
    <div className="card-container">
    <img alt= 'monsters' src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
    <h3>{props.monsters.name}</h3>
    <p>{props.monsters.email}</p>
    <p>{props.monsters.phone}</p>
    </div>
)