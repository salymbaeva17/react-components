import React, {useState} from 'react';

const LoginForm = () => {
    const [userdata, setUserdata] = useState("")
    const [message, setMessage] = useState("")
    const login = (e) => {
        e.preventDefault()
        if (userdata.username === "admin" && userdata.password === "admin"){
            setMessage("Welcome")
        } else {
            setMessage("Authorisation Error")
        }
        setUserdata({})
    }
    const changeInput = (e) => {
        setUserdata({...userdata, [e.target.name]: e.target.value})
    }
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" value={userdata.username} id="username" onChange={changeInput} />

            <label htmlFor="password">Password</label>
            <input type="password" value={userdata.password} id="password" onChange={changeInput} />

            <button onClick={login}>Login</button>
            <div>{message}</div>
        </form>
    )
}

export default LoginForm;