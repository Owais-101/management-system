import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { useAuthProvider } from './context/AuthProvider';
import { setLocalStorage } from './utils/LocalStorage';

const App = () => {

  const [role, setRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { employeeData, adminData } = useAuthProvider();

  const getCredentials = (email, password) => {
    const adminUser = adminData?.find(
      (e) => e.email === email && e.password === password
    );

    if (adminUser) {
      setRole("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({
        role: "admin",
        data: adminUser
      }));
      return;
    }

    const employeeUser = employeeData?.find(
      (e) => e.email === email && e.password === password
    );

    if (employeeUser) {
      setRole("employee");
      setLoggedInUser(employeeUser);
      localStorage.setItem("loggedInUser", JSON.stringify({
        role: "employee",
        data: employeeUser
      }));
      return;
    }

    alert("wrong email or password");
  };

  useEffect(() => {
    setLocalStorage()
  }, [])

  return (
    <>
      {role === "admin" && <AdminDashboard />}
      {role === "employee" && (
        <EmployeeDashboard employeeData={loggedInUser} />
      )}
      {!role && <Login getCredentials={getCredentials} />}
    </>
  );
};


export default App
