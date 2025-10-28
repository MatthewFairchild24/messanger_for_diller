import styles from './mainPage.module.scss'
import { ListChat } from '../../component/listChat'

export default function MainPage(){
    return(<>
    <section className={styles.sectionMainPage}>
        <section className={styles.sectionMenuBar}>
            <div className={styles.containerBurgerSearch}>
                <div className={styles.burger}></div>
                <div className={styles.search}></div>
            </div>
            <div className={styles.containerGroupFolder}></div>
            <div className={styles.containerChats}>
                <ListChat></ListChat>
            </div>

        </section>
        <section className={styles.sectionChatWindow}></section>
    </section>
    </>)
}