import clsx from 'clsx';
import DefaultLayout from '~/layoout/DefaultLayout';
import HorizontalList from '~/layoout/components/HorizontalList';
import SquarePaner from '~/images/SquarePaner.png';
import RecItem from '~/components/RecItem/indedx';
import CircleItem from '~/components/CircleItem';
import styles from './Home.module.css';
import Widget from '~/components/Widget';
import Button from '~/components/Button';
import NewFeed from '~/layoout/components/NewFeed';
import ItemList from '~/components/ItemList';
function Home() {
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

    var artists = [
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

    var listData = [
        {
            song: "Song's name",
            image: SquarePaner,
            artist: 'Artist',
        },
        {
            song: "Song's name",
            image: SquarePaner,
            artist: 'Artist',
        },
        {
            song: "Song's name",
            image: SquarePaner,
            artist: 'Artist',
        },
        {
            song: "Song's name",
            image: SquarePaner,
            artist: 'Artist',
        },
    ];

    const tags = ['Bossa Nova', 'UK Garage', 'Classical', 'Jazz', 'Afo Beat', 'Jersey Club', 'Pop', 'Country'];
    const colors = ['#9F7CCB', '#5D5ADA', '#BE586C', '#DFBD58', '#D05959', '#2F2F2F', '#B43434', '#4AA14D8A'];
    return (
        <>
            <DefaultLayout newfeed={'true'}>
                <HorizontalList
                    onClick={() => {
                        console.log('click');
                    }}
                    title="Popular albums"
                >
                    {data.map((item, index) => {
                        return <RecItem key={index} data={item} />;
                    })}
                </HorizontalList>

                <div className={clsx(styles.space)}></div>
                <HorizontalList
                    onClick={() => {
                        console.log('click');
                    }}
                    title="Artist"
                >
                    {artists.map((item, index) => {
                        return <CircleItem key={index} data={item} />;
                    })}
                </HorizontalList>
                <div className={clsx(styles.widgetWrapper)}>
                    <Widget title={'Genre'}>
                        <div className={styles.flexWidget}>
                            {tags.map((tag, index) => {
                                return (
                                    <span key={index} className={styles.marginRight}>
                                        <Button
                                            back={colors[index]}
                                            key={index}
                                            squarepadding={'true'}
                                            largest={'true'}
                                        >
                                            <span className={styles.tagStyle}>{tag}</span>
                                        </Button>
                                    </span>
                                );
                            })}
                        </div>
                    </Widget>
                    <Widget title={'Charts'}>
                        <div className={styles.flexWidget}>
                            {listData.map((item, index) => {
                                return <ItemList key={index} data={item} index={index + 1} />;
                            })}
                        </div>
                    </Widget>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Home;
