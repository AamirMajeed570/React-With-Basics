import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div className='container'>
        <h1>Hello! Learning Context API</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
