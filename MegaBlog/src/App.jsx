
import './App.css'
import conf from './config/conf';

function App() {
  // console.log(config.appwriteUrl)
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>My Blog With Appwrite</h1>
    </>
  )
}

export default App
