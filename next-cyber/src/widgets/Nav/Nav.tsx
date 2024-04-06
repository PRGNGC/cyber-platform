import styles from './Nav.module.scss'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { Buttons } from './Buttons'
import { MenuBurger } from './MenuBurger'
import { SmallMenu } from './SmallMenu'

export function Nav(){
    return(
        <section className={styles.navBarBlock}>
            <div className={styles.navBarContainer}>
                <Logo />
                <Menu />
                <Buttons />
                <MenuBurger />
                <SmallMenu />
            </div>
        </section>
    )
}