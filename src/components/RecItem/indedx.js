import Button from '../Button';
import styles from './RecItem.module.css';
import clsx from 'clsx';
import { useContext } from 'react';
import { DataSetContext } from '~/provider/DatasetProvider';
function RecItem({ data, ...props }) {
    const [dataSet, setDataSet] = useContext(DataSetContext);
    function handleData() {
        setDataSet([data]);
    }
    return (
        <Button onClick={handleData} disablehover to="/playlist">
            <div {...props} className={clsx(styles.wrapper)}>
                <img className={clsx(styles.img)} src={data.image} />
                <div className={clsx(styles.infoWrapper)}>
                    <span className={clsx(styles.mediumSpan)}>{data.name}</span>
                    <span className={clsx(styles.smallSpan)}>{data.artists}</span>
                </div>
            </div>
        </Button>
    );
}

export default RecItem;
