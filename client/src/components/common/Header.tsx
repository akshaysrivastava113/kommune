import { Link } from "react-router-dom";
import Signin from "./Signin";

export default function Header() {
    return (
        <div id="kom-header" className="bg-red-300 py-4 px-6 w-full flex justify-between items-center glass-panel">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Signin/>
        </div>
    )
}