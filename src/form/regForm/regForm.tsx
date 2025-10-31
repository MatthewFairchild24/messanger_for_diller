import styles from './regForm.module.scss'
import React, { useState } from 'react'

export default function RegForm(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()

        if(formData.password !== formData.confirmPassword){
            alert("К сожалению пароли не совпадают :(")
        }
        else{
            alert("Ура новый пользователь")
        }

        
    }

    




    return(<>
        <form className={styles.regForm}>
            <div className={styles.container_FF}>
                <div className={styles.container_header}>
                    <h2>Create account</h2>
                </div>
                <div className={styles.container_enter}>
                    <input type="text" placeholder='Username'name='username' value={formData.username} onChange={handleChange} className={styles.inputForm} />
                    <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} className={styles.inputForm} />
                    <input type="password" placeholder='Confirm password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} className={styles.inputForm} />
                    
                </div>
                <button className={styles.button} onClick={handleSubmit}>Continue</button>
            </div>
        </form>
    </>)
}