import { createContext } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const user = { name: "Aamir", email: "aamirmajeedkhan570@gmail.com" }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;