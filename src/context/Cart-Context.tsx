import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'


type MessagesProviderProps = {
    children: ReactNode
}

export type Messages = {
    id: number;
    amount: number;
}

type MessagesContext = {

}

export function useMessages() {
    return useContext(MessagesContext)
}


export const MessagesContext = React.createContext({} as MessagesContext);


export function MessagesProvider({ children }: MessagesProviderProps) {


    const [isOpen, setIsOpen] = useState<boolean>(false);

    const chesckIsLoggedIn = () => {
        if (localStorage.getItem("isLoggedIn")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const logIn = () => setIsLoggedIn(true)
    const logOut = () => setIsLoggedIn(false)



    useEffect(() => {
        chesckIsLoggedIn()
    }, [])


    return (
        <MessagesContext.Provider
            value={{
            }}>
            {children}
        </MessagesContext.Provider>
    )
}

