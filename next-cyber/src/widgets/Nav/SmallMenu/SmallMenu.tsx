import styles from './SmallMenu.module.scss'
import Link from 'next/link'
import { MenuBurger } from '../MenuBurger'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/features/store/store'
import { close } from '@/features/store/menu/menuSlice'

export function SmallMenu(){
    const menuState = useSelector((state: RootState) => state.menu.isOpen)
    const dispatch = useDispatch();

    return(        
        <div className={styles.smallMenuContainer}>
            <MenuBurger />
            <nav className={styles.smallMenuNav}> 
                <ul className={styles.smallMenuList}>
                    <li onClick={() => {dispatch(close())}} className={styles.smallMenuItem}><Link href='/'>Главная</Link></li>
                    <li className={styles.smallMenuItem}><Link href='/project'>О проекте</Link></li>
                    <li className={styles.smallMenuItem}><Link href='/abilities'>Возможности</Link></li>
                    <li className={styles.smallMenuItem}><Link href='/cards'>Карточки</Link></li>
                    <li className={styles.smallMenuItem}><Link href='/statistic'>Статистика</Link></li>
                    <li className={styles.smallMenuItem}><Link href='/faq'>FAQ</Link></li>
                </ul>
            </nav>
        </div>
    )
}