import { useState } from "react";

function useLocalStorage(key, initailValue) {
    // get item from local storage
    const storedValue = localStorage.getItem(key);

    if(storedValue) {
        const parsedValue = JSON.parse(storedValue);
        return parsedValue;
    }else{
        localStorage.setItem(key, JSON.stringify(initailValue));
        return initailValue;
    }
}

export default useLocalStorage;