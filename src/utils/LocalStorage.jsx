import React from 'react'
import { employee, admin } from './employeee.js'

const DATA_VERSION = "v2"; // change when structure changes

export const setLocalStorage = () => {
  const currentVersion = localStorage.getItem("dataVersion");

  if (currentVersion !== DATA_VERSION) {
    localStorage.setItem("employees", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
    localStorage.setItem("dataVersion", DATA_VERSION);
  }
};


if (!localStorage.getItem("admin")) {
  localStorage.setItem("admin", JSON.stringify(admin));
}


export const getLocalStorage = () => {
  return {
    employeeData: JSON.parse(localStorage.getItem("employees")) || [],
    adminData: JSON.parse(localStorage.getItem("admin")) || [],
  };
};


