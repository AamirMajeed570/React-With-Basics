import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ChatPage = () => {
    const [list,setList] = useState([])
    const fetchChats =async () =>{
        const {data} = await axios.get('/api/chats')
        setList(data);
        console.log(data);
    }
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
        <h2>List of Chats</h2>
        {list.map((data)=>{
            return(
                <ul key={data._id}>
                    <li>{data?.chatName}</li>
                    {/* <li>{data?.isGroupChat}</li>
                    <li>{data?.users?.name}</li>
                    <li>{data?.users?.email}</li> */}
                </ul>
            )
        })}
    </div>
  )
}

export default ChatPage