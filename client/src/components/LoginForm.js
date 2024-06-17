import React, { useEffect } from "react";

function LoginForm({}) {

    useEffect(() => {
        fetch("http://localhost:5555/login")
        .then((resp) => (resp.json()))
        .then ((data) => setLogin(data))
    }, [])

    return (
        <div className="login-container">
            <div className="login-inner-container">
                {}
            </div>
        </div>
    )
}
export default LogInContainer