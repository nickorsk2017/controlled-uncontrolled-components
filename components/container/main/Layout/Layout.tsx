import {Header, Footer} from "@main";
import styles from './Layout.module.css';

export function Layout(Component) {
    function WrappedComponent(props) {
      return (
        <div className={styles.container}>
            <Header/>
            <Component {...props} />
            <Footer/>
        </div>
      );
    }
      
    return WrappedComponent;
}