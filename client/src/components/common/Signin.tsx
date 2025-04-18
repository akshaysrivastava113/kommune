import { Link } from "react-router-dom";
import { KeySquare } from "lucide-react";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import SecondaryButton from "../wrapper/SecondaryButton";
//
export default function Signin() {
    const [isSignedInState, setIsSignedInState] = useState(false);
    useEffect(() => {
        const isSignedIn = Cookies.get("isSignedIn");
        if(isSignedIn)  setIsSignedInState(true);
    }, []);
    return (
        isSignedInState?'':<Link to="/login"><SecondaryButton className="flex justify-center items-center">
            <KeySquare className="w-4 h-4 mr-1" /><p>Sign In</p></SecondaryButton></Link>
    )
}