import { createContext, useState } from "react";
import { getToken } from '../services/requests'

export const AuthContext = createContext();


export function AuthProvider ({children}) {
    const [isLoggedIn, seIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState(false);

    const login = () => {
        getToken('/auth/login')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    const logout= () => {
        
    }

    return (
        <AuthContext.Provider value= {{isLoggedIn, seIsLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}