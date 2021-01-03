import Link from "next/link";
import styles from "./Content.module.scss";

export function Content() {
  return (
    <div>
      <h3>
        This is demonstartion of performance of react components:<br/>
      </h3>
      <ol className={styles.menu}>
          <li className={styles.menuItem}>
            <Link  href="/controlled">
              Controlled components
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/throttle">
              Throttle components
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/reference">
              Reference components
            </Link>
          </li>
        </ol>
    </div>
  )
}
