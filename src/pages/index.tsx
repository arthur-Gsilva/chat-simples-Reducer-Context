import { UserProvider } from '@/contexts/userContext'
import styles from '../styles/Home.module.css'
import { ChatProvider } from '@/contexts/chatContext'
import { Chat } from '@/components/Chat'

const Home = () => {
    return(
        <div className={styles.container}>
            <UserProvider>
                <ChatProvider>
                    <h1>Chat Simples</h1>

                    <Chat />
                </ChatProvider>
            </UserProvider>
        </div>
    )
}

export default Home