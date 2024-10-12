import React, { useState } from 'react'
import { store } from '../store'
import './Accordion.css'
const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const handleSelected = (accordionId) => {
        console.log(accordionId)
        setSelected(selected===null?accordionId:null);
    }
    return (
        <>
            {store.map((item, id) => {
                return <div className='container' key={id}>
                    <div className="question" onClick={() => handleSelected(item.id)}>
                        <p>{item.question}</p>
                        <span>+</span>
                    </div>
                    {
                        selected===item.id ? 
                        (<div className="answer">
                            {item.answer}
                        </div>) 
                        : null
                    }
                </div>
            })
            }
        </>
    )
}

export default Accordion
