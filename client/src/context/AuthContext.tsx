import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    loginContext: () => {}
});

export const AuthProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('isSignedIn');
        setIsLoggedIn(!!token);
    }, []);

    const loginContext = () => {
        console.log("login called");
        const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000);
        Cookies.set("isSignedIn", "true", { expires: oneHourFromNow });
    }
    return (
        <AuthContext.Provider value={{isLoggedIn, loginContext}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);