import { Link } from "react-router-dom";
import { KeySquare } from "lucide-react";
import getCookie from "../../utils/getCookie";

export default function Signin() {
    const token = getCookie("token");
    console.log("tok", token);
    return (
        token?'':<Link to="/login"><div className="flex justify-center items-center px-2 py-1 border rounded-md hover:shadow-md duration-500 cursor-pointer"><KeySquare className="w-4 h-4 mr-1" /><p className="ml-1 mb-1 font-semibold">Sign In</p></div></Link>
    )
}