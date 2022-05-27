import { createContext, useContext, useEffect, useState } from "react";

type UserType = {
    accesToken: string,
    id: string,
    username: string,
    name: string,
    email: string,
    contactdetails?: string,
    location?: string,
    role: string,
    photo?: string
}

type AuthContextProviderProps = {
    children : React.ReactNode
}

type AuthContextTypes = {
    user: UserType | undefined
    setUser : Function
}

const AuthContext = createContext<AuthContextTypes>({
    user: undefined,
    setUser : Function
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const [user, setUser] = useState<UserType>(() => {
        const authUserData = localStorage.getItem('user')
        return authUserData ? JSON.parse(authUserData) : undefined
    }); 

    useEffect(() => {
        user && localStorage.setItem('user' , JSON.stringify(user))
    }, [user])


    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextTypes => {
    const context = useContext(AuthContext);
    return context;
}