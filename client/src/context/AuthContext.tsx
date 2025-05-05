import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    authLoading: true,
    loginContext: (email: string) => {},
    logoutContext: () => {}
});

export const AuthProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('isSignedIn');
        setIsLoggedIn(!!token);
        setAuthLoading(false);
    }, []);

    const loginContext = (email: string) => {
        console.log("login called");
        const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000);
        Cookies.set("user", email, { expires: oneHourFromNow });
        Cookies.set("isSignedIn", "true", { expires: oneHourFromNow });
    }


    const logoutContext = () => {
        Cookies.remove('isSignedIn');
        setIsLoggedIn(false);
      };

    return (
        <AuthContext.Provider value={{isLoggedIn, authLoading, loginContext, logoutContext}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);