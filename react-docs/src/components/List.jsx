import React from 'react'

export const List = () => {
    const products = [
        {title: 'Cabbage',isFruit: false, id: 1},
        {title: 'Garlic',isFruit: false, id: 2},
        {title: 'Apple',isFruit: true, id: 3}
    ]
  return (
    <div>
        {
            products.map((data,id)=>(
                <ul key={id}>
                    <li style={{
                        color: data.isFruit?'green':'blue'
                    }}>{data.title}</li>
                </ul>
            ))
        }
    </div>
  )
}
