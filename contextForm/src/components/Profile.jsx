import React, {useState, useContext} from "react"
import UserContext from "../context/UserContext";


function Login() {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div>
    return (
        <>
            <h2>Profile</h2>
            <p>Welcome {user.username}</p>
        </>
    )
}
export default Login;