import React, {useState, useContext} from "react"
import UserContext from "../context/UserContext";


function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = () => {
        setUser({username,password});
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Login;