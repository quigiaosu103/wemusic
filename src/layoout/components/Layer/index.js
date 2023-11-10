import styles from './Layer.module.css';
import clsx from 'clsx';
import { useState } from 'react';
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
function Layer({ data }) {
    const [islogged, setIsLogged] = useState(false);
    const [isSuffed, setIsSuffed] = useState(false);
    const [isPause, setIsPasue] = useState(false);
    const [volume, setVolume] = useState(0);
    const [progress, setProgress] = useState(0);
    function handleClick() {
        setIsLogged(!islogged);
    }
    function handleSuffClick() {
        setIsSuffed(!isSuffed);
    }

    function handlePause() {
        setIsPasue(!isPause);
    }
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.infoWrapper)}>
                <img className={clsx(styles.img)} src={data.image ? data.image : null}></img>
                <div className={clsx()}>
                    <span className={styles.span}>Newjeans</span>
                    <span className={styles.span}>Newjeans</span>
                </div>
                <Button disablehover={'true'} onClick={handleClick}>
                    <img className={clsx(styles.icon)} src={islogged ? YellowHeart : whiteHeart} />
                </Button>
            </div>
            <div className={clsx(styles.middleLayerWrapper)}>
                <div className={clsx(styles.progressWrapper)}>
                    <span className={clsx(styles.progressNum)}>0:35</span>
                    <input
                        min={0}
                        max={100}
                        value={progress}
                        onChange={(e) => {
                            setProgress(e.target.value);
                        }}
                        className={clsx(styles.progress)}
                        type="range"
                    />
                    <span className={clsx(styles.progressNum)}>3:10</span>
                </div>
                <div className={clsx(styles.layerFunction)}>
                    <Button disablehover={'true'} onClick={handleSuffClick}>
                        <img src={isSuffed ? YellowSuffIon : SuffIcon} />
                    </Button>
                    <Button>
                        <img src={PrevIcon} />
                    </Button>
                    <Button onClick={handlePause}>
                        <img src={isPause ? ContinueIcon : Pause} />
                    </Button>
                    <Button>
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
