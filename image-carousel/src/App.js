import { useState } from 'react';
import './App.css';
import List from './components/List';
const data = [
  'https://plus.unsplash.com/premium_photo-1734430857712-dc968afbfce0?width=500',
  'https://images.unsplash.com/photo-1731778573373-224ffc8a1316?width=500',
  'https://images.unsplash.com/photo-1734077457229-8017ee15c7c7?width=500',

]
function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const handlePrev = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  }
  const handleNext = () => {
    if (imageIndex < data.length-1) {
      setImageIndex(imageIndex + 1)  
    }
  }
  return (
    <>
        <div className='container'>
          <button onClick={handlePrev}>Prev</button>
          <img src={data[imageIndex]}
           />
          <button onClick={handleNext}>Next</button>
        </div>
      <List />
  </>
  );
}

export default App;
