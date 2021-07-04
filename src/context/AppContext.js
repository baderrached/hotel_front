import React,{useState,createContext} from 'react';
export const AppCont=createContext();
export const AppProvider=(props)=>{
    const [user,setUser]=useState()
    const [isLoading,setisLoading]=useState(null)
    const[condidate,setCondidate]=useState()
    const [condidat,setCondidat]=useState()
    const [exam,setExam]=useState()

    return(
        <AppCont.Provider value={[user,setUser,isLoading,setisLoading,condidate,setCondidate,condidat,setCondidat,exam,setExam]}>
                {props.children}
        </AppCont.Provider>
    )
}