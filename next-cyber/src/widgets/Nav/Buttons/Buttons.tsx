import styles from './Buttons.module.scss'

export function Buttons(){
    return(
        <div className={styles.buttonsContainer}>
            <button className={styles.enterButton}>Войти</button>
            <button className={styles.registrationButton}>Регистрация</button>
        </div>
    )
}