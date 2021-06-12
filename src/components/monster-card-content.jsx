import React from 'react'

export default function Card(prop){
    console.log("card-cc => ", prop.monster);
    return (<div>
        <h1>{prop.monster.name}</h1>
    </div>)
}