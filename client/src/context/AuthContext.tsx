import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    authLoading: true,
    loginContext: () => {}
});

export const AuthProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('isSignedIn');
        setIsLoggedIn(!!token);
        setAuthLoading(false);
    }, []);

    const loginContext = () => {
        console.log("login called");
        const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000);
        Cookies.set("isSignedIn", "true", { expires: oneHourFromNow });
    }
    return (
        <AuthContext.Provider value={{isLoggedIn, authLoading, loginContext}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);