import './App.css'
import UserProvider, { UserContext } from './context'
import WelcomePage from './components/WelcomePage'

function App() {

  return (
   <UserProvider>
    <div className="App">
      <h1>React Context API</h1>
      <WelcomePage />
    </div>
   </UserProvider>
  )
}

export default App
