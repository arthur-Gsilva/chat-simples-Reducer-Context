import { useRef, KeyboardEvent } from 'react'
import styles from './styles.module.css'
import { useUser } from '@/contexts/userContext'

export const NameInput = () => {

    const userCtx = useUser()
    const nameRef = useRef<HTMLInputElement | null>(null)

    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter'){
            if(nameRef.current?.value.trim() !== '' && nameRef.current?.value !== 'bot'){
                userCtx?.setUser(nameRef.current?.value as string)
            }
        }
    }

     return(
        <div className={styles.container}>
            <p>Qual seu nome?</p>
            <div className={styles.inputArea}>
                <input 
                    type="text" 
                    ref={nameRef}
                    onKeyUp={onEnter}
                />
            </div>
        </div>
     )
}