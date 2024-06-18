import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ProductAPI from "./API/ProductAPI";

function App() {
  const [users, setUsers] = useState([]);
  const [loading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  // useEffect(() => {
  //   async function getposts() {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         console.log(res.data);
  //         setUsers(res.data);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err, err.message);
  //         setError(err);
  //       });
  //     console.log(users);
  //   }
  //   getposts();
  // }, []);
  // if(loading)
  //   return <h1 style={{color:'green'}}>Loading...</h1>
  // if(error)
  //   return <h1 style={{color:'red'}}>Error {error.message}</h1>
  return (
    <>
    <ProductAPI />
      {/* <div className="cards-data">
        {users.map((res) => {
          return (
            <div className="cards">
              <h1>{res.name}</h1>
              <h2>{res.username}</h2>
              <h3>{res.phone}</h3>
              <h4>{res.address.city}</h4>
              <h5>{res.website}</h5>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
