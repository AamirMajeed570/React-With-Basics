import axios from 'axios';
import React from 'react'
import './ProductAPI.css'
import { useEffect } from 'react';
import { useState } from 'react'

const ProductAPI = () => {
    const [comments,setCommemts]  = useState([]);
    async function getComments(){
        try {
            await axios.get("https://jsonplaceholder.typicode.com/comments")
                        .then((response)=>{
                            setCommemts(response.data)
                            console.log(response.data)
                        })
                        .catch((err)=>{
                            console.log("Some Error Ocurred",err);
                        })
                        .finally(()=>{
                            console.log("All The Best");
                        })
        } catch (error) {
            
        }
    }
    getComments();
  return (
    <div>
        {
            <div className='comments comment__card'>
                {comments.slice(0,100).map((data)=>(
                        <div className='comment-card'>
                            <span>PostID : {data.postId}</span>
                            <h2>Name:{data.name}</h2>
                            <h3>Email:{data.email}</h3>
                        </div>
                ))}
            </div>
        }
    </div>
  )
}

export default ProductAPI