import clsx from 'clsx';
import { useContext } from 'react';
import Button from '~/components/Button';
import styles from './Playlist.module.css';
import ItemList from '~/components/ItemList';
import HeaderOnly from '~/layoout/HeaderOnly';
import Rectangle2 from '~/images/Rectangle2.png';
import singlePauseIcon from '~/images/singlePauseIcon.svg';
import { DataSetContext } from '~/provider/DatasetProvider';
const songs = [
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
];
function Playlist() {
    const [dataSet, setDataSet] = useContext(DataSetContext);
    return (
        <div>
            <HeaderOnly title={dataSet[0].name}>
                <div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.playlistInfo)}>
                        <img className={clsx(styles.img)} src={dataSet[0].image} />
                        <div className={clsx(styles.infoWrapper)}>
                            <span className={clsx(styles.title)}>NewJeans 2nd EP ‘Get Up’</span>
                            <span className={clsx(styles.artist)}>Newjeans</span>
                            <span className={clsx(styles.category)}>Category</span>
                            <Button>
                                <img src={singlePauseIcon} className={clsx(styles.iconWrapper)}></img>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.songsWrapper)}>
                    {songs.map((song, index) => {
                        return (
                            <div key={index} className={clsx(styles.songWrapper)}>
                                <ItemList key={index} option="true" index={index + 1} data={song} />
                            </div>
                        );
                    })}
                </div>
            </HeaderOnly>
        </div>
    );
}

export default Playlist;
