import React,{useState,createContext} from 'react';
export const AppCont=createContext();
export const AppProvider=(props)=>{
    const [cart,setCart]=useState([1])

    const counts = {};
    const sampleArray = ['a', 'a', 'b', 'c'];
    cart.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts)
    return(
        <AppCont.Provider value={[cart,setCart]}>
                {props.children}
        </AppCont.Provider>
    )
}