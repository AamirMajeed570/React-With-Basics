import React from 'react'
import { useSelector } from 'react-redux';

const Redux = () => {
    const count = useSelector(state => state);
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default Redux;
