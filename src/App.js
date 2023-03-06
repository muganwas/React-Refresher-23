import React, { useReducer, createContext } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { userReducer, defaultUsers } from './reducers/userReducer';
import './styling/classedstyles.scss';

export const UserContext = createContext();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </>
  )
);

function App() {
  const [users, dispatch] = useReducer(userReducer, defaultUsers);
  const value = {
    users,
    addUsers: ({ user_id, user_first_name, user_last_name }) => {
      dispatch({
        type: 'new',
        id: user_id,
        firstName: user_first_name,
        lastName: user_last_name
      });
    }
  }
  return (
    <UserContext.Provider value={value}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
