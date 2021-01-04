import styles from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <span>
        Author: <b>Stepanov Nick</b>
      </span>
      <span>
        Email:{' '}
        <a className={styles.link} href='mailto: nickorsk2017@gmail.com'>
          nickorsk2017@gmail.com
        </a>
      </span>
      <span>
        LinkedIn:{' '}
        <a className={styles.link} href='https://www.linkedin.com/in/nickot/'>
          {' '}
          my profile
        </a>
      </span>
    </footer>
  );
}
