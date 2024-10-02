import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const TestLogin = () =>
{
    const [username, setUsername] = useState<string | null>(null)
    useEffect(() =>
    {
        const token = localStorage.getItem('token');
        if (token)
        {
            const userData = jwtDecode(token);
            console.log(userData)
            if (userData)
            {
                setUsername(userData.sub + "")
            }
        }
    }, [])
    return (
        <div>
            {username && <div>
                <h2>Xin chào : {username}</h2>
            </div>}
        </div>
    );
}

export default TestLogin;