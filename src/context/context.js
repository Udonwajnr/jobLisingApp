import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../../lib/supabase";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [isLoading,setIsLoading] = useState(false)
    const [userToken,setUserToken] = useState('hello')
    
    const signUp=async(email,password)=>{
        let { data,error} = await supabase.auth.signUp({
            email:email,
            password:password
        })
        
        if(data.user){
        const jsonValue = JSON.stringify(data.user)
        let userToken = await AsyncStorage.setItem("data",jsonValue);
        setUserToken(userToken)       
     }else{
            Alert.alert(error.message)
     }

    }

    const login=async(email,password)=>{
        let { data,error} = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
        
        if(data.user){
        const jsonValue = JSON.stringify(data.user)
        let userToken = await AsyncStorage.setItem("data",jsonValue);
        setUserToken(userToken)       
     }else{
            Alert.alert(error.message)
     }

    }

    const isLoggedIn =async()=>{
    try{
        setIsLoading(true)
        let userToken = await AsyncStorage.getItem("data")
        setUserToken(userToken)
        setIsLoading(false)
    }catch(e){
        console.log(`isLogged in error ${e}`)
    }
    
    }

    const logout=()=>{
        setUserToken(null)
        AsyncStorage.removeItem("data")
        setIsLoading(false)
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

    return(
        <AuthContext.Provider value={{login,logout,isLoading,userToken,signUp}}>
            {children}
        </AuthContext.Provider>
    )    
}