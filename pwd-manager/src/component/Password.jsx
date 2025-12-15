import React, { useEffect, useCallback, useState } from 'react'
import './Password.css'

const Password = () => {
    const [inputPassword, setInputPassword] = useState("Aamir@2000")
    const [number, setNumber] = useState(false)
    const [character, setCharacter] = useState(false)
    const [length, setLength] = useState(8)
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (character)
            chars += "!@#$%^&*()_+~`|}{[]:;?><,./-="
        if (number)
            chars += "0123456789"
        for (let i = 1; i <= length; i++) {
            let index = Math.floor(Math.random() * chars.length + 1)
            pass += chars[index]
        }
        console.log(pass)
        setInputPassword(pass)
    }, [number, character, length])

    useEffect(() => {
        passwordGenerator()
    }, [number, character, length, passwordGenerator])
    return (
        <div className='container'>
            <h2>Password Component</h2>
            <input
                type="text"
                name="password"
                id="pwd-input"
                value={inputPassword}
                readOnly />
            <div className='box'>
                <input
                    type='checkbox'
                    id='showPassword'
                    value={number}
                    onChange={() => {
                        setNumber((prev) => {
                            return !prev
                        })
                    }} />
                <label>Number</label>
                <input
                    type='checkbox'
                    id='showPassword'
                    value={character}
                    onChange={() => {
                        setCharacter((prev) => {
                            return !prev
                        })
                    }} />
                <label>Characters</label>
                <input type='range'
                    id='showPassword'
                    min={8}
                    max={20}
                    value={length}
                    onChange={(e) => setLength(e.target.value)} />
                <label>Length {length}</label>
                <button>Copy</button>
            </div>
        </div>
    )
}

export default Password