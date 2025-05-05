import { CircleUser, LogOut, Settings, UserPen } from "lucide-react";
import SignOut from "../../pages/SignOut";

export default function ProfileIcon() {
    return (
        <div className="m-2 ml-6 cursor-pointer relative group rounded-full hover:bg-gray-200 hover:shadow-md">
            <div>
                <CircleUser />
            </div>
            <div id="hoverable-profile-child" className=" bg-white text-black rounded-md shadow-lg absolute w-40 m-2 p-2 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <button className="w-full p-2 flex justify-center rounded-md hover:bg-gray-100"><UserPen /><p className="ml-2">Profile</p></button>
                <button className="w-full p-2 flex justify-center rounded-md hover:bg-gray-100"><Settings /><p className="ml-2">Settings</p></button>
                <SignOut/>
            </div>
        </div>
    )
}