import React, { useContext, createContext } from 'react'

export const AuthContext = createContext();


const AuthProvider = ({children}) => {



  return (
    <div>
        <AuthContext.Provider value={{user:"owais"}} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

export const useAuthProvider = () => {
   return useContext(AuthContext);
} 