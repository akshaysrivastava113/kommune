import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const backendUrl = process.env.BACKEND_URL;
console.log(backendUrl);
export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginCall = () => {
        const data = {
            email,
            password
        };
        console.log(data);

        axios.post(`http://localhost:3000/api/auth/login`, data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
    }
    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <div className="flex flex-col justify-center items-center p-4 m-4 bg-white rounded-lg shadow-lg w-1/4">
                <h1 className="text-2xl font-bold mb-4">Welcome back</h1>
                <h3 className="text-md font-light mb-4">Sign in to access your account</h3>
                <div className="flex flex-col w-full">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="p-2 mb-4 border rounded" placeholder="Email" required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="p-2 mb-4 border rounded" placeholder="Password" required />
                    <button onClick={loginCall} type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
                    <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-aether-purple hover:text-aether-blue font-medium">
                        Sign up
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}