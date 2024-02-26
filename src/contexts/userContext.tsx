import { ReactNode, createContext, useContext, useState } from "react";

type userContext = {
    user: string,
    setUser: (newUser: string) => void
}

export const userContext = createContext<userContext | null>(null)

export const UserProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState('')

    return(
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)