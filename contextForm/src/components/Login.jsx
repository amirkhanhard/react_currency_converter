import React, {useState, useContext} from "react"
import UserContext from "../context/UserContext";


function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password});
    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" name="username" required value={username} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" style={{backgroundColor:"gray", padding:"5px 10px", color:"white"}}>Submit</button>
        </form>
    )
}
export default Login;