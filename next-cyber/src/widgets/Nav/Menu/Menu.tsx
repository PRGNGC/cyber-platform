import styles from './Menu.module.scss'
import Link from 'next/link'

export function Menu(){
    return(
        <nav className={styles.menuContainer}> 
            <ul className={styles.menuList}>
                <li className={styles.menuItem}><Link href='/'>Главная</Link></li>
                <li className={styles.menuItem}><Link href='/project'>О проекте</Link></li>
                <li className={styles.menuItem}><Link href='/abilities'>Возможности</Link></li>
                <li className={styles.menuItem}><Link href='/cards'>Карточки</Link></li>
                <li className={styles.menuItem}><Link href='/statistic'>Статистика</Link></li>
                <li className={styles.menuItem}><Link href='/faq'>FAQ</Link></li>
            </ul>
        </nav>
    )
}