import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App";
import Login from "./pages/Login";
import SignUpForm from "./components/SignUpForm";
import Profile from "./pages/Profile";
import OpportunitiesContainer from "./components/OpportunitiesContainer";
import OpportunityDetails from "./components/OpportunityDetails";
//import { createRoot } from "react-dom/client";

const routes = [
    {
        path:'/',
        element: <App />,
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
