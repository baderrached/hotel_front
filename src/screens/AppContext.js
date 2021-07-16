import React,{useState,createContext} from 'react';
export const AppCont=createContext();
export const AppProvider=(props)=>{
    const [cart,setCart]=useState([])
    const [username,setUsername]=useState([])
    

    counter = {}

    cart.forEach(function(obj) {
    obj.count=(counter[obj.name] || 0) + 1
})
    console.log(counter)
    // console.log(Object.keys(ca).length);
    return(
        <AppCont.Provider value={[cart,setCart]}>
                {props.children}
        </AppCont.Provider>
    )
}