import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import PrimaryButton from "../components/wrapper/PrimaryButton";
import SpinLoader from "../components/wrapper/SpinLoader";
import { useAuth } from "../context/AuthContext";

const backendUrl = process.env.BACKEND_URL;
console.log(backendUrl);
export default function Login(){
    const { loginContext } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const loginCall = () => {
        setIsLoading(true);
        const data = {
            email,
            password
        };
        console.log(data);

        axios.post(`http://localhost:3000/api/auth/login`, data, {
            withCredentials: true
          })
        .then(res => {
            if(res.status == 200) {
                
                if(res.data.token){
                    //Call login and send the token as arg instead
                    console.log(loginContext);
                    loginContext();
                }   
                window.location.href = '/';
            }
        })
        .finally(() => {
            setIsLoading(false);
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
                    <button disabled={isLoading} onClick={loginCall} type="submit"><PrimaryButton className={`flex justify-center items-center ${isLoading&&`opacity-50`}`}>{isLoading?<SpinLoader color="#FFFFFF"/>:'Sign In'}</PrimaryButton></button>
                    <div className="text-center text-sm mt-2">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-300 hover:text-aether-blue font-medium">
                        Sign up
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}