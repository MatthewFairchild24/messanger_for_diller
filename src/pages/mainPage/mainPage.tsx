import styles from './mainPage.module.scss'
import { ListChat } from '../../component/listChat'

export default function MainPage(){
    return(<>
    <section className={styles.sectionMainPage}>
        <section className={styles.sectionMenuBar}>
            <div className={styles.containerBurgerSearch}>
                <div className={styles.burger}>
                    <img src="
                    /image/burger.png" alt="burger menu" />
                </div>
                <div className={styles.search}>
                    <input type="text" className={styles.inputSearch} />
                </div>
            </div>
            <div className={styles.containerGroupFolder}></div> {/*Потом группировки по папкам */}
            <div className={styles.containerChats}>
                <ListChat></ListChat>
            </div>

        </section>
        <section className={styles.sectionChatWindow}></section>
    </section>
    </>)
}