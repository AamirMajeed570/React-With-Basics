import { useState } from "react"
import { FaStar } from "react-icons/fa"
import './index.css'
export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex)
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex)
        setHover(rating)

    }
    return (
        <>
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return <FaStar
                        key={index}
                        className={index<= (hover || rating)? 'active':'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                })
            }
        </div>
        <h2 style={{textAlign: 'center'}}>You have given {rating} out of {noOfStars} stars</h2>
        </>
    )
}