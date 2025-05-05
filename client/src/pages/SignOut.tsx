import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";
import { base_url } from "../config";
export default function SignOut() {
    const { logoutContext } = useAuth();
    const handleSignout = async () => {
        const res = await axios.post(`${base_url}/api/auth/logout`, {}, { withCredentials: true });
        logoutContext();
        window.location.href = '/';
        // window.location.reload();
    }
    return(
        <button onClick={handleSignout} className="w-full p-2 flex justify-center rounded-md hover:bg-gray-100"><LogOut /><p className="ml-2">Sign Out</p></button>
    )
}