import clsx from 'clsx';
import Button from '~/components/Button';
import HeaderOnly from '~/layoout/HeaderOnly';
import styles from './Podcast.module.css';
import RecItem from '~/components/RecItem/indedx';
import SquarePaner from '~/images/SquarePaner.png';
var data = [
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Bao',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Andree',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Billies',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Swift',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Pmmc',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Pmmc',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Swift',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Pmmc',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Pmmc',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Swift',
    },
    {
        name: 'Artist',
        image: SquarePaner,
        artist: 'Pmmc',
    },
];
function Podcast() {
    return (
        <div>
            <HeaderOnly title={'Podcast'}>
                <div className={clsx(styles.contentWrapper)}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={clsx(styles.itemWrapper)}>
                                <RecItem data={item} />
                            </div>
                        );
                    })}
                </div>
            </HeaderOnly>
        </div>
    );
}

export default Podcast;
