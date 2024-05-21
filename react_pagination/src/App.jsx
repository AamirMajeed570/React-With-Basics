import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchposts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
    console.log("hello", data);
  };

  const selectPageHandler = (selectedPage) => {
    if(selectedPage>=1 && selectedPage<=products.length/10 && selectedPage !== page)
    setPage(selectedPage);
  };

  useEffect(() => {
    fetchposts();
  }, []);
  return (
    <>
      <h1>Hello Learning Pagination</h1>
      <div className="products_array">
        {products.slice(page * 10 - 10, page * 10).map((data) => (
          <div key={data.id} className="product__single">
            <img src={data.thumbnail} alt={data.title} />
            <span>{data.title}</span>
          </div>
        ))}
      </div>
      {products.length > 0 && (
        <div className="pagination">
          <span  onClick={() => selectPageHandler(page - 1)}>◀</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "Selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span  onClick={() => selectPageHandler(page + 1)}>▶</span>
        </div>
      )}
    </>
  );
}

export default App;
