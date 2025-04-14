import { Link } from "react-router-dom";
import { KeySquare } from "lucide-react";

export default function Header() {
    return (
        <div id="kom-header" className="bg-red-300 py-4 px-6 w-full flex justify-between items-center glass-panel">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <div className="flex justify-center items-center px-2 py-1 border rounded-md hover:shadow-md duration-500 cursor-pointer"><KeySquare className="w-4 h-4 mr-1" /><Link to="/login" className="ml-1 mb-1 font-semibold">Sign In</Link></div>
        </div>
    )
}