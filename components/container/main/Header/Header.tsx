import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
    return (
    <header className={styles.navigation}>
        <ul className={styles.navigationLinks}>
            <li className={styles.link}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className={styles.link}>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
            <li className={styles.link}>
                <Link href="/users">
                    <a>Users</a>
                </Link>
            </li>
        </ul>
        <div></div>
    </header>
  )
}
