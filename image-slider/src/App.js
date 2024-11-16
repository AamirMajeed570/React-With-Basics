import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  let page = 2, limit = 4;
  const fetchImages = async (url) => {
    try {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        console.log("Images-----", data[0]);
        setImages(data)
      }
    } catch (error) {
      setLoading(false);
      console.log("Error-----", error);
    }finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchImages(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
  }, [])
  return (
    <div>
      {loading ? (
        <div>Loading...</div>):(
        <div>
          {
            images.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.download_url} alt="Images"  style={{ width: '100%', maxWidth: '400px', marginBottom: '10px' }}/>
                </div>
              )
            })
          }
        </div>)}
    </div>
  )
}

export default App;
