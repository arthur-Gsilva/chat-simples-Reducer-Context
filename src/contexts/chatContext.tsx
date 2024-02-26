import { chatReducer } from "@/reducers/chatReducer";
import { Message } from "@/types/message";
import { ReactNode, createContext, useContext, useReducer } from "react";

type chatContext = {
    chat: Message[],
    addMessage: (user: string, text: string) => void,
    deleteMessage: (id: number) => void
}

export const chatContext = createContext<chatContext | null>(null)

export const ChatProvider = ({children}: {children: ReactNode}) => {

    const [chat, dispatch] = useReducer(chatReducer, [])

    const addMessage = (user: string, text: string) => {
        dispatch({
            type: 'add',
            payload: {user, text}
        })
    }

    const deleteMessage = (id: number) => {
        dispatch({
            type: 'delete',
            payload: {id}
        })
    }
    
    return(
        <chatContext.Provider value={{ chat, addMessage, deleteMessage }}>
            {children}
        </chatContext.Provider>
    )
}

export const useChat = () => useContext(chatContext)