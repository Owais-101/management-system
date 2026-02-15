import React, { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useAuthProvider } from './context/AuthProvider';

const App = () => {

  const [role, setRole] = useState(null);




  return (
    <>
      <AdminDashboard />
      <Login />

    </>
  )
}

export default App