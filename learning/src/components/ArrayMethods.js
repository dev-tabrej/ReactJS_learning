import React from 'react'

export default function ArrayMethods() {
    let arrays=[{name:"Tabrej",Id:'1'},{name:"Juned",Id:'2'},{name:"Motasim",Id:'3'}];
    const item=arrays.map(array=><li key={array.Id}>{array.name}</li>);
  return (
    <ul>
      {item}
    </ul>
  )
}
