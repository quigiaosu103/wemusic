import clsx from 'clsx';
import HeaderOnly from '~/layoout/HeaderOnly';
import styles from './Playlist.module.css';
import Rectangle2 from '~/images/Rectangle2.png';
import Button from '~/components/Button';
import singlePauseIcon from '~/images/singlePauseIcon.svg';
import ItemList from '~/components/ItemList';
const songs = [
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
    { song: 'Song name', artist: 'Artist name' },
];
function Playlist() {
    return (
        <div>
            <HeaderOnly title="MCK's Album">
                <div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.playlistInfo)}>
                        <img src={Rectangle2} />
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
