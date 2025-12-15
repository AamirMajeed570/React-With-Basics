import { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import "./Login.css";
const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // Store the username and password in local storage on form submission
    const handleForm = async (username,password) => {
        const hashedPassword = await bcrypt.hash(password,10)
        console.log("Hashed Password:", hashedPassword);
        console.log("Handle Form Called");
        const userData = {
            userName: username,
            password: hashedPassword
        };
        console.log("User Data:", userData);
        // Store the Data in local storage
        localStorage.setItem("userData", JSON.stringify(userData))
        const data = localStorage.getItem("userData");
        console.log("Data Stored", JSON.parse(data));
        }

    return (
        <div className="container">
            Login Component
            <div className="inner-container">
                <input type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <button onClick={()=>{
                    handleForm(userName,password)
                }}>Login</button>
            </div>
        </div>
    );
}
export default Login;