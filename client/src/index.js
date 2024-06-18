import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./pages/App";
import Login from "./pages/Login";
import SignUpForm from "./components/SignUpForm";
import Profile from "./pages/Profile";
import OpportunitiesContainer from "./components/OpportunitiesContainer";
import OpportunityDetails from "./components/OpportunityDetails";
import Home from "./pages/Home";
//import { createRoot } from "react-dom/client";

const routes = [
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/home',
        element: <Home />,
    },
    {
        path:'/login',
        element: <Login />,
    },
    {
        path:'/signup',
        element: <SignUpForm />,
    },
    {
        path:'/profile',
        element: <Profile />,
    },
    {
        path:'/opportunities',
        element: <OpportunitiesContainer />,
    },
    {
        path:'/opportunities/:id',
        element: <OpportunityDetails />,
    },

]

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
//const container = document.getElementById("root");
//const root = createRoot(container);
//root.render(<App />);
