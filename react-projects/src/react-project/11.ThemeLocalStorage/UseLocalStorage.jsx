import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value,setValue]= useState(()=>{
        try{
            const storedValue = localStorage.getItem(key)
            return storedValue !== null? JSON.parse(storedValue)
            : defaultValue

        }catch(err){
            return defaultValue
        }
       
    })
    useEffect(()=>{
        try{
            localStorage.setItem(key,JSON.stringify(value))
        }catch (err){
            console.log(err);
        }
    },[key,value])


    return [value, setValue]; 
}