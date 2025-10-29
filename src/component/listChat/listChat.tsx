import { MockChat } from '../../just_prob/data/mock-chat'
import styles from './listChat.module.scss'

export default function ListChat(){
    return(<>
        <div className={styles.listChat}>
            <ul className={styles.chatItems}>
                {MockChat.map((chat) => (
                    <li key={chat.id} className={styles.chatItem}>
                        <img src={chat.avatar} alt={`${chat.name} avatar`} className={styles.avatar}/>
                        <div className={styles.chatInfo}>
                            <div className={styles.groupNameTime}>
                                <h4 className={styles.chatName}>{chat.name}</h4>
                                {chat.timestamp && <span className={styles.timestamp}>{chat.timestamp}</span>}
                            </div>
                            <p className={styles.lastMessage}>{chat.last_message}</p>       
                        </div>
                    </li>
                ))}
            </ul>

        </div>
        
    </>)
}
