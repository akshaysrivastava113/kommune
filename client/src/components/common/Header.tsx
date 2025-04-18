import { Link } from "react-router-dom";
import Signin from "./Signin";
import PrimaryButton from "../wrapper/PrimaryButton";

export default function Header() {
    return (
        <div id="kom-header" className="bg-red-300 py-4 px-6 w-full flex justify-between items-center glass-panel">
            <div className="flex flex-[1] justify-start">
                <Link to="/"><PrimaryButton><p>Home</p></PrimaryButton></Link>
                <Link to="/explore"><PrimaryButton><p>Explore</p></PrimaryButton></Link>
            </div>
            <div className="flex flex-[1] justify-end">
                <Link to="/new"><PrimaryButton><p>Create Article</p></PrimaryButton></Link>
                <Signin/>
            </div>
        </div>
    )
}