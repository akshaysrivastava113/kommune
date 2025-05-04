import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../config";
import SecondaryButton from "../components/wrapper/SecondaryButton";
import SpinLoader from "../components/wrapper/SpinLoader";
import Alert from "../components/common/Alert";

const baseUrl = base_url;

export default function Signup(){
    const[isLoading, setIsLoading] = useState(false);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [errorColor, setErrorColor] = useState("red");
    const [errorText, setErrorText] = useState("Something went wrong! Please try again or contact administrator.");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleError = (errorColorToSet: string, errorTextToSet: string) => {
        setErrorColor(errorColorToSet);
        setErrorText(errorTextToSet);
        setDisplayMessage(true);
        setTimeout(() => {
            setDisplayMessage(false);
        }, 5000);
    }
    const handleSignup = async () => {
        setIsLoading(true);
        const data = {
            email,
            password
        }
        try{
            const res = await axios.post(`${baseUrl}/api/auth/signup`, data, {
                withCredentials: true
              });
            if(res.status == 201){
                const token = res.data.token;
                if(token){
                    const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000);
                    Cookies.set('isSignedIn', "true", { expires: oneHourFromNow });
                    window.location.href = '/';
                } else {
                    handleError("red","Something went wrong! Please try again or contact administrator.");
                }
            } else {
                handleError("red","Something went wrong! Please try again or contact administrator.");
            }
        } catch(e: any){
            console.error(e);
            if(e.status == 409){
                handleError("yellow","User already exists. Please log into your account.")
            } else {
                handleError("red","Something went wrong! Please try again or contact administrator.");
            }
        }

        setIsLoading(false);

    }
    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <div className="flex flex-col justify-center items-center p-4 m-4 bg-white rounded-lg shadow-lg w-1/4">
                <h1 className="text-2xl font-bold mb-4">Sign up</h1>
                <div className="flex flex-col w-full">
                    {displayMessage&&<Alert color={errorColor} text={errorText}/>}
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="p-2 mb-4 border rounded" placeholder="Email" required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="p-2 mb-4 border rounded" placeholder="Password" required />
                    <button disabled={isLoading} onClick={handleSignup} type="submit"><SecondaryButton className={`flex justify-center items-center ${isLoading&&`opacity-50`}`}>{isLoading?<SpinLoader color="#0000000"/>:'Register'}</SecondaryButton></button>
                    <div className="text-center text-sm">
                        <div className="text-center text-sm mt-2">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-300 hover:text-aether-blue font-medium">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}