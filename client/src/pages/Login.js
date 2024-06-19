import React, { useState } from "react";
import LogInForm from "../components/LoginForm";
import Button from 'react-bootstrap/Button';
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";


function Login({ onLogin }) {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <main>
                <LogInForm onLogin={onLogin} />
                <br></br>
                <p>
                    Don't have an account? &nbsp;
                    <Button className="button" onClick={() => navigate("/signup")}>
                        Sign Up
                    </Button>
                </p>

            </main>
        </div>
    )
}

export default Login;