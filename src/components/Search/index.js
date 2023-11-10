import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../Menu';
import Button from '../Button';
import Popper from '../Popper';
import { useState } from 'react';
import styles from './Search.module.css';
import SearchIcon from '~/images/SearchIcon.svg';

var data = [
    {
        text: 'Search',
    },
    {
        icon: SearchIcon,
        text: 'Search',
        to: '/favorite',
    },
    {
        icon: SearchIcon,
        text: 'Setting',
        click: () => {
            alert('clicked');
        },
    },
];
function Search() {
    const [listResult, setListResult] = useState([1]);
    const [showResult, setShowResult] = useState(false);
    const [input, setInput] = useState('');
    function handleShow() {
        console.log('call');
        if (!showResult) {
            setShowResult(true);
        }
    }

    function handleHide() {
        setShowResult(false);
    }

    return (
        <Tippy
            visible={true}
            interactive={'true'}
            onClickOutside={handleHide}
            render={(attrs) =>
                listResult.length &&
                showResult && (
                    <div className={clsx(styles.menuWrapper, 'box')} tabIndex="-1" {...attrs}>
                        <Popper center="true">
                            <Menu data={data} largest={'true'} />
                        </Popper>
                    </div>
                )
            }
        >
            <div className={clsx(styles.wrapper)}>
                <span className={clsx(styles.searchIconWrapper)}>
                    <Button>
                        <img src={SearchIcon} />
                    </Button>
                </span>
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    value={input}
                    onFocus={handleShow}
                    placeholder="Search by artist, song and album"
                    className={clsx(styles.inputField)}
                />
            </div>
        </Tippy>
    );
}

export default Search;
