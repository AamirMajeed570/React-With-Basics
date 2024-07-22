import { createContext } from "react";

// Step 1: Create Context
export const AppContext = createContext(); 

// Step 2: Context Provider
const ContextProvider = (props)=>{
    const phone = '+1 123456789'
    const name = 'Aamir Majeed'
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;