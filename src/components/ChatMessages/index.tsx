import { useChat } from '@/contexts/chatContext'
import styles from './styles.module.css'
import { useUser } from '@/contexts/userContext'

import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

export const ChatMessages = () => {

    const chatCtx = useChat()
    const userCtx = useUser()

    const deleteMsg = (id: number) => {
        chatCtx?.deleteMessage(id)
    }

    return(
        <div className={styles.container}>
            {chatCtx?.chat.map((item) => (
                <div 
                    key={item.id} 
                    className={styles.message}
                    style={{
                        alignSelf: item.user === userCtx?.user ? 'self-end' : 'self-start',
                        backgroundColor: item.user === userCtx?.user ? '#444' : '#888'
                    }}
                >
                    <div 
                        className={styles.userName}
                        style={{textAlign: item.user === userCtx?.user ? 'right' : 'left'}}
                    >
                        <>
                            {item.user}
                            <div className={styles.icons}>
                                <FaRegEdit style={{color: 'yellow'}}/>
                                <IoTrashOutline style={{color: 'red'}} onClick={() => deleteMsg(item.id)}/>
                            </div>
                            
                        </>
                    </div>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}