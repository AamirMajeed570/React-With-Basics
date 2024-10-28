import { useState } from "react";
import Navbar from "./components/Navbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { data } from "./store";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [favouriteIndexArray, setFavouriteIndexArray] = useState([]);
  const handleAddFavourites = (favouriteId) => {
    console.log("Favourite id---", favouriteId);
    if (favouriteIndexArray.includes(favouriteId)) {
      setFavouriteIndexArray(
        favouriteIndexArray.filter((id) => id !== favouriteId)
      ); //Remove if already added
    } else {
      setFavouriteIndexArray((prevArray) => [...prevArray, favouriteId]);
    }
  };
  return (
    <>
      <Navbar />
      {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="cards-container">
          {data.map((item, index) => (
            <div className="cards" key={index}>
              <div className="title">{item.name}</div>
              <div className="image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="favourite">
                {favouriteIndexArray.includes(index) ? (
                  <FavoriteIcon
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleAddFavourites(index)}
                  />
                ) : (
                  <FavoriteBorderIcon
                  style={{ cursor: "pointer" }}
                    onClick={() => handleAddFavourites(index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer favourite={favouriteIndexArray} />
    </>
  );
}

export default App;
