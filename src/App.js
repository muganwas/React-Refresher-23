import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </>
  )
);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
