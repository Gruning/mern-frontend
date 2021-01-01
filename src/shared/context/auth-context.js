import {createContext} from 'react'

export const AuthContext = createContext({
    isLogedIn:false,
    login:()=>{},
    logout:()=>{}
})