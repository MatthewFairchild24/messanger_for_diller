import styles from './authFrom.module.scss'

export default function AuthForm(){
    return(<>
        <form className={styles.authForm}>
            <div className={styles.container_AF}>
                <div className={styles.container_header}>
                    <h2>Authorization</h2>
                </div>
                <div className={styles.container_enter}>
                    <input type="text" placeholder='Username' className={styles.inputForm} />
                    <input type="password" placeholder='Password' className={styles.inputForm} />
                </div>
                <div className={styles.container_remember_forgot}> 
                    <div className={styles.remember}>
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </div>
                    <div className={styles.forgot}>
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className={styles.button_login}>LOGIN</button>
            </div>
        </form>
    </>)
}