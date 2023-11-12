import styles from './Layer.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import whiteHeart from '~/images/whiteHeart.svg';
import Pause from '~/images/Pause.svg';
import NextIcon from '~/images/NextIcon.svg';
import AddListIcon from '~/images/AddListIcon.svg';
import PrevIcon from '~/images/PrevIcon.svg';
import SuffIcon from '~/images/SuffIcon.svg';
import VolumeIcon from '~/images/VolumeIcon.svg';
import YellowHeart from '~/images/YellowHeart.svg';
import YellowSuffIon from '~/images/YellowSuffIon.svg';
import ContinueIcon from '~/images/ContinueIcon.svg';
import { useRef } from 'react';
function Layer({ data, hooks }) {
    const [islogged, setIsLogged] = useState(false);
    const [isSuffed, setIsSuffed] = useState(true);
    const [isPlay, setIsPlay] = useState(false);
    const [song, setSong] = useState({});
    const [volume, setVolume] = useState(40);
    const [progress, setProgress] = useState(0);
    const [songIndex, setSongIndex] = useState(0);
    const ref = useRef(new Audio());

    useEffect(() => {
        if (isPlay) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
        return () => {
            if (isPlay) {
                ref.current.pause();
            }
        };
    }, [isPlay]);

    useEffect(() => {
        for (let i = 0; i < hooks.listSong.length; i++) {
            if (hooks.song.id == hooks.listSong[i].id) {
                setSongIndex((prev) => {
                    console.log('update', i);
                    return i;
                });

                break;
            }
        }
        console.log('curr id: ', songIndex);
        ref.current.src = hooks.song.src;
        ref.current.play();
        setIsPlay(true);
    }, [hooks.song]);

    useEffect(() => {
        console.log('rerender');
        ref.current.addEventListener('ended', () => {
            if (isSuffed) {
                nextSong();
            } else {
                setIsPlay(false);
            }
        });

        ref.current.addEventListener('timeupdate', updateProgress);
        return () => {
            ref.current.removeEventListener('ended', () => {
                if (isSuffed) {
                    nextSong();
                } else {
                    setIsPlay(false);
                }
            });
            ref.current.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    useEffect(() => {
        console.log('lssong: ', hooks.listSong);
    }, [hooks.listSong]);

    useEffect(() => {
        ref.current.volume = volume / 100;
    }, [volume]);

    function handleClick() {
        setIsLogged(!islogged);
    }
    function handleSuffClick() {
        setIsSuffed(!isSuffed);
    }

    function handlePlay() {
        setIsPlay(!isPlay);
    }

    const updateProgress = () => {
        const currentProgress = (ref.current.currentTime / ref.current.duration) * 100;
        setProgress(currentProgress);
    };

    function nextSong() {
        setSongIndex((prevSongIndex) => {
            console.log('next song..', prevSongIndex, (prevSongIndex + 1) % hooks.listSong.length);
            const newIndex = (prevSongIndex + 1) % hooks.listSong.length;
            hooks.setSong(hooks.listSong[newIndex]);
            return newIndex;
        });
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.infoWrapper)}>
                <img className={clsx(styles.img)} src={data.image ? data.image : null}></img>
                <div className={clsx()}>
                    <span className={styles.span}>{hooks.song.name}</span>
                    <span className={styles.span}>Newjeans</span>
                </div>
                <Button disablehover={'true'} onClick={handleClick}>
                    <img className={clsx(styles.icon)} src={islogged ? YellowHeart : whiteHeart} />
                </Button>
            </div>
            <div className={clsx(styles.middleLayerWrapper)}>
                <div className={clsx(styles.progressWrapper)}>
                    <span className={clsx(styles.progressNum)}>{`${
                        parseInt(ref.current.currentTime) <= 9
                            ? `0:0${parseInt(ref.current.currentTime)}`
                            : `0:${parseInt(ref.current.currentTime)}`
                    }`}</span>
                    <input
                        min={0}
                        max={100}
                        value={progress ? progress : 0}
                        onChange={(e) => {
                            ref.current.currentTime = (e.target.value * ref.current.duration) / 100;
                            if (!isPlay) {
                                setIsPlay(true);
                            }
                            setProgress(e.target.value);
                        }}
                        className={clsx(styles.progress)}
                        type="range"
                    />
                    <span className={clsx(styles.progressNum)}>
                        {ref.current.duration ? `0:${parseInt(ref.current.duration)}` : '0:30'}
                    </span>
                </div>
                <div className={clsx(styles.layerFunction)}>
                    <Button disablehover={'true'} onClick={handleSuffClick}>
                        <img src={isSuffed ? YellowSuffIon : SuffIcon} />
                    </Button>
                    <Button>
                        <img src={PrevIcon} />
                    </Button>
                    <Button onClick={handlePlay}>
                        <img src={isPlay ? ContinueIcon : Pause} />
                    </Button>
                    <Button onClick={nextSong}>
                        <img src={NextIcon} />
                    </Button>
                    <Button>
                        <img src={AddListIcon} />
                    </Button>
                </div>
            </div>
            <div className={clsx(styles.volumeWrapper)}>
                <img src={VolumeIcon} />
                <div className={clsx(styles.progressWrapper)}>
                    <input
                        onChange={(e) => {
                            setVolume(e.target.value);
                        }}
                        value={volume}
                        min={0}
                        max={100}
                        className={clsx(styles.progress, styles.smallBar)}
                        type="range"
                    />
                </div>
            </div>
        </div>
    );
}

export default Layer;
