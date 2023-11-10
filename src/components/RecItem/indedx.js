
import styles from './RecItem.module.css'
import clsx from 'clsx'
function RecItem({data, ...props}) {
    return <div {...props} className={clsx(styles.wrapper)}>
        <img className={clsx(styles.img)} src={data.image}/>
        <div className={clsx(styles.infoWrapper)}>
            <span className={clsx(styles.mediumSpan)}>{data.name}</span>
            <span  className={clsx(styles.smallSpan)}>{data.artist}</span>
        </div>
    </div>
}

export default RecItem