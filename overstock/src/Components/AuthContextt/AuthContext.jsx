import {createContext,useReducer} from "react";
import { AuthInit } from "./AuthInit";

export const AuthContext=createContext();

export default function AppContextProvider({children}){
    const init={email:"",password:"",confirm:"",isAuth:false}
      const [person,Authdispatch]=useReducer(AuthInit,init);

      return(
        <AuthContext.Provider value={{person,Authdispatch}}>{children}</AuthContext.Provider>
      )
}