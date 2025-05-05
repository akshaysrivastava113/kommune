import { Link } from "react-router-dom";
import Signin from "./Signin";
import PrimaryButton from "../wrapper/PrimaryButton";
import Navbar from "./NavBar";
import { useAuth } from "../../context/AuthContext";
import ProfileIcon from "./ProfileIcon";

export default function Header() {
    const { isLoggedIn } = useAuth();
    return (
        <div id="kom-header" className=" py-4 px-6 w-full flex justify-between items-center glass-panel">
            <div className="flex flex-[1] justify-start ">
                {/* <Link to="/"><PrimaryButton><p>Home</p></PrimaryButton></Link>
                <Link to="/explore"><PrimaryButton><p>Explore</p></PrimaryButton></Link> */}
                <Navbar/>
            </div>
            <div className="flex flex-[1] justify-end items-center">
                {isLoggedIn&&<Link to="/new"><PrimaryButton><p>Create Article</p></PrimaryButton></Link>}
                <Signin/>
                {isLoggedIn&&
                    <ProfileIcon/>
                }
            </div>
        </div>
    )
}