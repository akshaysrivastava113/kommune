import { Link } from "react-router-dom";

export default function Signup(){
    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <div className="flex flex-col justify-center items-center p-4 m-4 bg-white rounded-lg shadow-lg w-1/4">
                <h1 className="text-2xl font-bold mb-4">Sign up</h1>
                <form className="flex flex-col w-full">
                    <input type="email" id="email" className="p-2 mb-4 border rounded" placeholder="Email" required />
                    <input type="password" id="password" className="p-2 mb-4 border rounded" placeholder="Password" required />
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded">Register</button>
                    <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-aether-purple hover:text-aether-blue font-medium">
                        Log in
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}