import { useUser } from '@/contexts/userContext'
import styles from './styles.module.css'
import { NameInput } from '../NameInput'
import { ChatInput } from '../ChatInput.tsx'
import { ChatMessages } from '../ChatMessages'

export const Chat = () => {

    const userCtx = useUser()

    if(!userCtx) return null
    if(!userCtx.user) return <NameInput />

    return(
        <div className={styles.container}>
            <div className={styles.chatArea}>
                <ChatMessages />
            </div>

            <div className={styles.messageArea}>
                <ChatInput name={userCtx.user}/>
            </div>
            <div className={styles.messageArea}>
                <ChatInput name='Bot'/>
            </div>
        </div>
    )
}