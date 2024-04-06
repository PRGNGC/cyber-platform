import styles from './MenuBurger.module.scss'

export function MenuBurger(){
    return(
        <div className={styles.menuBurgerContainer}>
            <span className={styles.longLine}></span>
            <span className={styles.shortLine}></span>
            <span className={styles.longLine}></span>
        </div>
    )
}