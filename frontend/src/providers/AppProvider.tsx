import React,{ createContext } from "react";
import { AuthProvider } from "./AuthContext";

const AppContext=createContext({})



const AppProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <AppContext.Provider value={{}}>
        <AuthProvider>
            {children}
        </AuthProvider>
    </AppContext.Provider>
  )
}

export {AppProvider}
