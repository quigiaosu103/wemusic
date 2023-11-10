import clsx from 'clsx';
import styles from './CircleItem.module.css';
import Profile from '~/images/Profile.svg';
function CircleItem(props) {
    return (
        <div {...props} className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={props.data.image ? props.data.image : Profile}></img>
            <span className={clsx(styles.nameField)}>{props.data.name}</span>
        </div>
    );
}

export default CircleItem;
