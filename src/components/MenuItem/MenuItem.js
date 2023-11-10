import clsx from 'clsx';
import styles from './MenuItem.module.css';
import Button from '../Button';
function MenuItem(props) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Button {...props} flexstart={'true'} onClick={props.data.click} to={props.data.to}>
                {props.data.icon && (
                    <img
                        style={{
                            filter: props.data.iconFill
                                ? props.data.iconFill
                                : '#invert(100%) sepia(100%) saturate(0%) hue-rotate(88deg) brightness(102%) contrast(101%)',
                        }}
                        src={props.data.icon}
                    />
                )}
                <span
                    style={{
                        filter: props.data.iconFill
                            ? props.data.iconFill
                            : '#invert(100%) sepia(100%) saturate(0%) hue-rotate(88deg) brightness(102%) contrast(101%)',
                    }}
                    className={clsx(styles.text)}
                >
                    {props.data.text}
                </span>
            </Button>
        </div>
    );
}

export default MenuItem;
