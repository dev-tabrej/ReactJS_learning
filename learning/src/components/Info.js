import React from 'react'

export default function Info({user}) {

  return (
    <div>
      <p>{user.name}</p>
      {/* <p>{user.pic}</p> */}
      <img style={{height:"auto" ,width:"200px", marginLeft:"200px"}} src={user.pic} alt="" srcset="" />
    </div>
  )
}
