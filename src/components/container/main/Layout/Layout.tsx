import {Header, Footer} from '@main';
import styles from './Layout.module.css';

export function Layout(Component: () => JSX.Element): <T>(props: T) => JSX.Element {
  return function Wrapper<T>(props: T): JSX.Element {
    return (
      <div className={styles.container}>
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    );
  };
}
