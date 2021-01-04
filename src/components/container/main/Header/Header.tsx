import LinkWrapper from '../LinkWrapper/LinkWrapper';
import styles from './Header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.navigation}>
      <ul className={styles.navigationLinks}>
        <LinkWrapper styles={styles.link} href='/'>
          <a>Home</a>
        </LinkWrapper>
        <LinkWrapper styles={styles.link} href='/controlled'>
          <a>Controlled</a>
        </LinkWrapper>
        <LinkWrapper styles={styles.link} href='/throttle'>
          <a>Throttle</a>
        </LinkWrapper>
        <LinkWrapper styles={styles.link} href='/reference'>
          <a>Reference</a>
        </LinkWrapper>
      </ul>
      <div></div>
    </header>
  );
}
