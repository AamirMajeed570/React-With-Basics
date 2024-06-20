import React, { useEffect, useState } from "react";
import "./ShowPost.css";
import axios from "axios";
const ShowPost = () => {
  let [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //   Get All The posts

  async function fetchPosts() {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts/?_limit=10")
      .then((response) => setPost(response.data))
      .catch((err) => console.log("Error", err.message));
  }

  //   Delete All the posts

  const handleDelete = async (id) => {
    console.log("Deleted Succesfully");
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/?${id}`);
    setPost(
      post.filter((post) => {
        return post.id !== id;
      })
    );
  };
// Add a Post

const addPost =async (title,body)=>{
    await axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:title,
        body:body
    })
    .then((response)=>{
        setPost((post)=> [response.data,...post])
        setBody('')
        setTitle('')

    })
    .catch((err)=>console.log("Error",err))
}

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <div>
        {
          <div className="post-display">
            {post.map((data) => (
              <div className="post__details" key={data.id}>
                <span>{data.title}</span>
                <p>{data.body}</p>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </div>
            ))}
          </div>
        }
      </div>
      {/* Add a Post */}
      {
        <div className="add__post">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button onClick={addPost}>Add</button>
        </div>
      }
    </div>
  );
};

export default ShowPost;
