import React, { useEffect, useState } from "react";
import './style.css'
const Exercise = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchPosts = async () => {
    try {
      // Make an API Call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch Data");
      }
      const jsondata = await response.json();
      console.log(jsondata);
      setData(jsondata);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div className="container">
        {data.map((list) => {
          return (
          <div className="cards">
            <h4>ID : {list.id}</h4>
            <h2>Title : {list.title.charAt(0).toUpperCase() + list.title.slice(1)}</h2>
            <h3>Body : {list.body.charAt(0).toUpperCase() + list.body.slice(1)}</h3>
          </div>
          )
        })}
      </div>
    </>
  );
};

export default Exercise;
