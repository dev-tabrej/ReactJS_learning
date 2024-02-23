import React from 'react'
import Info from './Info';

export default function ConditionalRendering({user}) {
    let Tabrej=false;
    let image;
    if(Tabrej)
        image=<Info user={user}/>;
    else
        image=<p>Value of image is false</p>
  return (
    <>
      {image}
    </>
  )
}
