import React from 'react'

export default function ArrayMethods() {
    let arrays=[{name:"Tabrej",Id:'1',isFriend:false},{name:"Juned",Id:'2',isFriend:true},{name:"Motasim",Id:'3',isFriend:true}];
    const item=arrays.map(array=><li key={array.Id} style={{
      color: array.isFriend ? 'magenta' : 'darkgreen'
    }}>{array.name} </li>);
  return (
    <ul>
      {item}
    </ul>
  )
}
