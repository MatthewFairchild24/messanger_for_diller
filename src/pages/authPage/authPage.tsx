import styles from './authPage.module.scss'
import { AuthForm } from '../../form/authForm'


export default function AuthPage(){
    return(<>
        <section className={styles.section_authpage}>
            <AuthForm></AuthForm>
        </section>
    </>)
}