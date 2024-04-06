import styles from './Logo.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export function Logo(){
    return(
        <Link href='/' className={styles.logoContainer}>
            <Image src='/icons/cyber-logo.svg' alt='logo' width={40} height={40}/>
            CYSPNET
        </Link>
    )
}