import clsx from 'clsx';
import styles from './Widget.module.css';
import Button from '../Button';
function Widget({ title, children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.headingWrapper)}>
                <span className={styles.title}>{title}</span>
                <Button mediumbtn={'true'} disablehover={'true'}>
                    <span className={clsx(styles.btn)}>Show All</span>
                </Button>
            </div>
            <div>{children}</div>
        </div>
    );
}
export default Widget;
