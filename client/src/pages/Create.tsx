import { useEffect } from "react";
import CreateForm from "../components/articles/CreateForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Create() {
    const navigate = useNavigate()
    const {isLoggedIn, authLoading} = useAuth();
    console.log(isLoggedIn);
    useEffect(() =>{
        if(!authLoading && !isLoggedIn) {
            navigate('/login');
            toast.info("You have to be logged in to view this content.");
        }
    }, [authLoading, isLoggedIn])
    if (authLoading) return <p>Loading...</p>;
    return (
        <div className="flex justify-center">
            <CreateForm/>
        </div>
    )
}