import clsx from 'clsx';
import styles from './Menu.module.css';
import MenuItem from '../MenuItem/MenuItem';
function Menu(props) {
    return (
        <div className={clsx(styles.wrapper)}>
            {props.data.map((data, index) => (
                <MenuItem key={index} {...props} data={data} />
            ))}
        </div>
    );
}

export default Menu;
