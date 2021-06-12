
import React from 'react'
import './monster-card.css'
//import Card from './monster-card-content'

function Card(prop){
    //console.log("card-cc => ", prop.monster);
    return (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${prop.monster.id}?set=set2&size=180x180`} />
        <h1 > {prop.monster.name} </h1>
        <p>{prop.monster.email}</p>
    </div>)
}

export default function MonsterCard(props){
 
    return <div className='card-list'> 
        {props.monsters.map((monster, i) => (
            <Card key={i} monster={monster}/> 
        ))}
     </div>
}