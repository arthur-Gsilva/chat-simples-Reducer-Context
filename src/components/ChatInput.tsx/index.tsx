import { useRef, KeyboardEvent } from 'react'
import styles from './styles.module.css'
import { useChat } from '@/contexts/chatContext'

type Props = {
    name: string
}

export const ChatInput = ({name}: Props) => {

    const chatCtx = useChat()
    const messageRef = useRef<HTMLInputElement | null>(null)

    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter'){
            if(messageRef.current?.value.trim() !== '' && messageRef.current?.value){
                chatCtx?.addMessage(name, messageRef.current.value.trim() as string)
                messageRef.current.value = ''
            }
        }
    }

    return(
        <input 
            type="text"
            placeholder={`${name}, Digite uma mensagem e pressione Enter`}
            className={styles.input}
            ref={messageRef}
            onKeyUp={onEnter}
        />
    )
}