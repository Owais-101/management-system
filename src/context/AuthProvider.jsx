import React, { useContext, createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

  const { employeeData, adminData } = getLocalStorage()

  return (
    <div>
      <AuthContext.Provider value={{ employeeData , adminData }} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

export const useAuthProvider = () => {
  return useContext(AuthContext);
} 