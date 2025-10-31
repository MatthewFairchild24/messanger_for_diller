import styles from './regPage.module.scss'
import { RegForm } from '../../form/regForm'


export default function RegPage() {
    return(<>
        <section className={styles.sectionRegPage}>
            <div className={styles.containerRegForm}>
                <RegForm></RegForm>
            </div>

        </section>
    </>)
}
