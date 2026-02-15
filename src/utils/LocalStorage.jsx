import React from 'react'
import { employee, admin } from './employeee.js'

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));

};



