import {useState,useEffect} from "react"

const getSavedValue=(key,initialValue)=>{
   try {
      let savedValue = localStorage.getItem(key)
     if(savedValue) return JSON.parse(savedValue)
   } catch (e) {
      console.error(`Error parsing localStorage key "${key}":`, e);
      return initialValue
   }
}

const useLocalStorage=(key,initialValue)=>{
 let [value,setvalue] = useState(()=>getSavedValue(key,initialValue))
 
 useEffect(()=>{
    try {
       localStorage.setItem(key,JSON.stringify(value))
    } catch (e) {
       console.error(`Error setting localStorage key "${key}":`, e);
    }
 },[key,value])
 
 return [value,setvalue]
}


export default useLocalStorage