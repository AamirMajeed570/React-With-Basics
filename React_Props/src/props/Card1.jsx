import React from 'react'
import './card.css'
const Card1 = (props) => {
  return (
    <div className='container'>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww" alt="" width={200}/>
    </div>
  )
}

export default Card1