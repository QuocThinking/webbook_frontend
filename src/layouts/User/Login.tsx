import { error } from "console";
import React, { useState } from "react";

const Login = () =>
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e: any) =>
    {
        e.preventDefault();
        const loginRequest = {
            username: username,
            password: password
        };
        fetch(`http://localhost:8080/api/v1/account/dang-nhap`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginRequest)
            }
        ).then(
            (response) =>
            {
                if (response.ok)
                {
                    return response.json();
                } else
                {
                    throw new Error("Dang nhap that bai")
                }
            }
        ).then(
            (data) =>
            {
                const { jwt } = data;
                localStorage.setItem("token", jwt)
                setError("Dang nhap thanh cong")
            }
        ).catch((error) =>
        {
            console.error("Dang nhap that bai", error);
            setError("Đang nhap thất bại vui lòng kiểm tra lại username và password")
        })
    }
    return (
        <div>
            <legend className="text-center">Please Login</legend>
            <div className="mt-3 col-md-4 col-12 mx-auto">
                <form className="form" onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit"
                        className="btn btn-primary">Submit</button>
                    {error && (<div style={{ color: 'red' }}>{error}</div>)}
                </form>
            </div>
        </div>

    )
}

export default Login;