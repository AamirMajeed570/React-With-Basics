import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    //Step 2: Wrap the App into ContextProvider 
    <ContextProvider>
        <App />
    </ContextProvider>
)
