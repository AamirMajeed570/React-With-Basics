import React, { useState } from 'react';
import './Cards.css';

const Cards = ({ data }) => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const handleAddWallet = (id) => {
        console.log(id);
        const filteredCards = data.find((card) => card.id === id);
        if (filteredCards && !cards.some((card) => card.id === id)) {
            setCards([...cards, filteredCards]);
        }

    }

    // Dynamically update the background Color
    const toggleColor = (id) => {
        console.log("Add", id)
        if (selectedCards.includes(id)) {
            setSelectedCards(selectedCards.filter((cardId) => cardId !== id))
        } else {
            setSelectedCards([...selectedCards, id]);
        }
    }

    return (
        <div>
            <h2>Display Cards Here</h2>
            <div className="container">
                {data.map((item) => (
                    <div key={item.id}
                        className="card"
                        onClick={() => toggleColor(item.id)}
                        style={{
                            backgroundColor: selectedCards.includes(item.id) ? 'lightblue' : 'white',
                            cursor: 'pointer'
                        }}
                    >
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <button
                           onClick={(e) => {
                            e.stopPropagation(); // Prevent click event propagation to the parent div
                            handleAddWallet(item.id);
                          }}
                        >Add</button>
                    </div>
                ))}
            </div>
            <h2>Selected Cards</h2>
            <div className='selected-cards'>
                {cards.map((data) => {
                    return <div key={data.id} className='selected-cards'>
                        <p>{data.id}</p>
                        <p>{data.name}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Cards;
