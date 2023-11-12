import clsx from 'clsx';
import DefaultLayout from '~/layoout/DefaultLayout';
import HorizontalList from '~/layoout/components/HorizontalList';
import SquarePaner from '~/images/SquarePaner.png';
import RecItem from '~/components/RecItem/indedx';
import CircleItem from '~/components/CircleItem';
import styles from './Home.module.css';
import Widget from '~/components/Widget';
import Button from '~/components/Button';
import ItemList from '~/components/ItemList';
function Home({ hooks }) {
    console.log(hooks);
    var albums = [
        {
            id: '01O7ZCLOl5rTZovKxNKbHB',
            name: 'Ch?y (From "Ròm")',
            totalSongs: 1,
            releaseDate: '2020-07-28',
            image: 'https://i.scdn.co/image/ab67616d0000b273d32d302fd7797db78a98948f',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '023PJs8VpWTLMVZT0Dh33Y',
            name: 'Walk On The Street',
            totalSongs: 1,
            releaseDate: '2021-04-06',
            image: 'https://i.scdn.co/image/ab67616d0000b273721738a1ac772295946937ff',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '02iMCzw7vJaVFajWvy64NK',
            name: 'Thong Dong',
            totalSongs: 1,
            releaseDate: '2023-08-10',
            image: 'https://i.scdn.co/image/ab67616d0000b273e43221e85376849ab9ae6a72',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '04qfRRR7abikuT1MXd6sgA',
            name: 'GIO TAY LÊN',
            totalSongs: 1,
            releaseDate: '2022-01-26',
            image: 'https://i.scdn.co/image/ab67616d0000b27346e73e2dad89fd8f009e46fc',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '06rEMKTobhSohrDep6Wlop',
            name: 'Khung Tr?i Ngày Xua (25th Làn Sóng Xanh)',
            totalSongs: 1,
            releaseDate: '2022-11-03',
            image: 'https://i.scdn.co/image/ab67616d0000b27398b1bd1aaa03c56a828af510',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '073uK1TqkfN12YddkndDUO',
            name: 'Ng?u Nhiên',
            totalSongs: 1,
            releaseDate: '2022-01-16',
            image: 'https://i.scdn.co/image/ab67616d0000b273339a7147ebc18fe29e5c506a',
            type: 'album',
            songs: null,
            artists: 'artist namedsa dasmdasdmadadasdadadasd          dada',
        },
        {
            id: '07XHRkkmccPTgLAEViIIlC',
            name: 'Cao ?c 20',
            totalSongs: 1,
            releaseDate: '2023-05-16',
            image: 'https://i.scdn.co/image/ab67616d0000b273f072f06a112022a492b7f05c',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '085OnqklZKRuoIymFdu25F',
            name: 'Super Power (feat. MinhLai, SMO , Lil Wuyn, Khoa Wzzzy)',
            totalSongs: 2,
            releaseDate: '2020-11-15',
            image: 'https://i.scdn.co/image/ab67616d0000b273437f56436615a50eb19e2200',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '09EsAPNoxQVnOkroHOX2xE',
            name: 'Thang Hoa Ký',
            totalSongs: 1,
            releaseDate: '2023-04-26',
            image: 'https://i.scdn.co/image/ab67616d0000b27357f71fd5f5f946e531d5757c',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '09XqAtkVh8o7gfOVcw3vKC',
            name: 'T?i Sao Không Nói!? (feat. Pjnboys)',
            totalSongs: 1,
            releaseDate: '2020-06-21',
            image: 'https://i.scdn.co/image/ab67616d0000b27381145962f7765a68c4a22869',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0AHNtGPNaMdMfNiYJipV53',
            name: 'SKYLINE',
            totalSongs: 1,
            releaseDate: '2022-02-22',
            image: 'https://i.scdn.co/image/ab67616d0000b27319fb09163e04e5047115a632',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0amPlfp4GJ9jxabGj3znkt',
            name: 'NO SCANDAL',
            totalSongs: 1,
            releaseDate: '2022-09-24',
            image: 'https://i.scdn.co/image/ab67616d0000b27317b3f85da75f268633f35471',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0DfU8bP8ZbR0SBJSfRddR3',
            name: 'Là Do Em Xui Thôi',
            totalSongs: 1,
            releaseDate: '2022-01-18',
            image: 'https://i.scdn.co/image/ab67616d0000b2738faf0fc3a518f4f1d96d17f1',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0Ds8ZRiIlVuqoBkWSFyIcy',
            name: 'Diamond',
            totalSongs: 1,
            releaseDate: '2020-04-21',
            image: 'https://i.scdn.co/image/ab67616d0000b2733ee012e8fffe01de93b6e42e',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0DWtwcp42sYsUCQyZTDXke',
            name: 'Thiên Ðàng (Live At T?t Tân Th?i)',
            totalSongs: 1,
            releaseDate: '2021-02-23',
            image: 'https://i.scdn.co/image/ab67616d0000b2736adecb2176e63ff27687b683',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0e6JU0ZBJDV03AiSbx3nGq',
            name: 'Mách B?o',
            totalSongs: 1,
            releaseDate: '2022-02-17',
            image: 'https://i.scdn.co/image/ab67616d0000b273d4b646f4bec2c29230276a38',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0eVRpLCwnAcVnlZM52DN5m',
            name: 'Thuong',
            totalSongs: 7,
            releaseDate: '2022-07-04',
            image: 'https://i.scdn.co/image/ab67616d0000b273786fe80ecdc416eaaf6109ec',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0Fs6N8Ji1Q89a9IG6NLqwO',
            name: 'Tr?n V?n Nghia Tình (Thái Hoàng Remix)',
            totalSongs: 1,
            releaseDate: '2022-08-08',
            image: 'https://i.scdn.co/image/ab67616d0000b2738fc9be99dcaa9b560afc6d29',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0Ghr2oYgi8S6GNohSJYKQU',
            name: 'Yêu Không Ngh? Phép',
            totalSongs: 1,
            releaseDate: '2019-09-25',
            image: 'https://i.scdn.co/image/ab67616d0000b2736a62c7aa6804e1ad3c1f9d9a',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
        {
            id: '0GHtQP8ITeG2PpdUAWDrEW',
            name: 'Hoàng Tôn: The Hits Collection',
            totalSongs: 14,
            releaseDate: '2015-01-01',
            image: 'https://i.scdn.co/image/ab67616d0000b273fe71a82fc063d0f37e1617c2',
            type: 'album',
            songs: null,
            artists: 'artist name',
        },
    ];

    var songs = [
        {
            id: '0LSBedXElKa7envDJW7ff2',
            name: 'Ai Ng? Ta Còn Thuong',
            stream: 71070,
            src: 'https://p.scdn.co/mp3-preview/bb91e71aa8f8ac17d2e0ec84247830f98a17f9dd?cid=9ca8fd0d0a914430b8ad945daeeb5d39',
            type: 'track',
            album: null,
            playlists: null,
        },
        {
            id: '0sMc56aynx4DJwJtElVOSf',
            name: 'Thuong',
            stream: 11106,
            src: 'https://p.scdn.co/mp3-preview/164dcd9fb6b3f415cf5f01767a32a4354380e185?cid=9ca8fd0d0a914430b8ad945daeeb5d39',
            type: 'track',
            album: null,
            playlists: null,
        },
        {
            id: '4hlQpXyyLqOWDhwT4FlWGS',
            name: 'C?n C? Nu?c M?t',
            stream: 54219,
            src: 'https://p.scdn.co/mp3-preview/ba80623402e780f8c4a6dd68a4803979c9cf063b?cid=9ca8fd0d0a914430b8ad945daeeb5d39',
            type: 'track',
            album: null,
            playlists: null,
        },
        {
            id: '4mAgLCrwXzoa8hEH9QbgqF',
            name: 'T?ng Là T?t C?',
            stream: 56194,
            src: 'https://p.scdn.co/mp3-preview/62fea84281c214276e3411f2000ce92425b8c6ac?cid=9ca8fd0d0a914430b8ad945daeeb5d39',
            type: 'track',
            album: null,
            playlists: null,
        },
        {
            id: '5BdNtfI1O8gqnFvyE7sYGM',
            name: 'L?n Cu?i',
            stream: 33349,
            src: 'https://p.scdn.co/mp3-preview/70fd76516c1a526d4aa2adc15567db35d36bbb51?cid=9ca8fd0d0a914430b8ad945daeeb5d39',
            type: 'track',
            album: null,
            playlists: null,
        },
        {
            id: '6iUP7jdxZ8Btqr9IfCydt9',
            name: 'Khóc M?t Mình',
            stream: 61594,
            src: 'https://p.scdn.co/mp3-preview/30877fe910a8582e6380dd063355799f1d9fc56f?cid=9ca8fd0d0a914430b8ad945daeeb5d39',
            type: 'track',
            album: null,
            playlists: null,
        },
        {
            id: '7z1qDBkwQ7XQlk93ZwzJlT',
            name: 'Chua T?ng Vì Nhau',
            stream: 80670,
            src: 'https://p.scdn.co/mp3-preview/5eac7d892b7f46f3775bc53346a7f5fccdd459d6?cid=9ca8fd0d0a914430b8ad945daeeb5d39',
            type: 'track',
            album: null,
            playlists: null,
        },
    ];

    const artistss = [
        {
            id: '0gGd4WhPXBSgDX6fdOHcOw',
            name: 'Rhymastic',
            followers: 621968,
            image: 'https://i.scdn.co/image/ab6761610000e5eb0e62e694576ab6f8e56db3d8',
            albums: null,
            genres: null,
        },
        {
            id: '0JggLWdYe1p6oHZoHpyPSD',
            name: 'Blacka',
            followers: 15850,
            image: 'https://i.scdn.co/image/ab67616d0000b27341b1bbc9c36881f93a764a69',
            albums: null,
            genres: null,
        },
        {
            id: '1KLRO4UHKmiwS0grGzFdgT',
            name: 'D? Cho?t (DC)',
            followers: 23239,
            image: 'https://i.scdn.co/image/ab6761610000e5ebfec09bd196e896f20125e9ae',
            albums: null,
            genres: null,
        },
        {
            id: '1L1VfizWn4DkFt602yD80U',
            name: 'ERIK',
            followers: 866782,
            image: 'https://i.scdn.co/image/ab6761610000e5eb63ba7b9441e542f3b2938b83',
            albums: null,
            genres: null,
        },
        {
            id: '1Vc9oJC8vSXfirygPAL2Du',
            name: 'Hu?nh James',
            followers: 76754,
            image: 'https://i.scdn.co/image/ab6761610000e5eb8bf9d51445275a7428ef8715',
            albums: null,
            genres: null,
        },
        {
            id: '1WvNgEoB66jmHodcj15Zi9',
            name: 'B Ray',
            followers: 617340,
            image: 'https://i.scdn.co/image/ab6761610000e5eba69580618d4cb782c49f6c7b',
            albums: null,
            genres: null,
        },
        {
            id: '23jUmiOyAG9Dzq6Ayp9LUG',
            name: 'SPACESPEAKERS',
            followers: 170538,
            image: 'https://i.scdn.co/image/ab6761610000e5ebe9d5bd4830db01ede51a8eec',
            albums: null,
            genres: null,
        },
        {
            id: '2Bwp23pD4UVsSkchHDZw4F',
            name: 'Karik',
            followers: 296473,
            image: 'https://i.scdn.co/image/ab6761610000e5eb3e1b16e263e182dc85f2b7c3',
            albums: null,
            genres: null,
        },
        {
            id: '2Fc5cGXai8xzLhGyltp4tT',
            name: 'Suboi',
            followers: 159579,
            image: 'https://i.scdn.co/image/ab6761610000e5eb518371670c75754203839ac5',
            albums: null,
            genres: null,
        },
        {
            id: '2RmVHHCdiQb8yGa0eRhQjP',
            name: 'King Of Rap',
            followers: 19066,
            image: 'https://i.scdn.co/image/ab67616d0000b27377bb519c5749624d1a1871b4',
            albums: null,
            genres: null,
        },
        {
            id: '3EPkqJFzEGSJWtGsu1Xwqt',
            name: 'Kay Tr?n',
            followers: 75280,
            image: 'https://i.scdn.co/image/ab6761610000e5eb0c915218b67de3265b6430a1',
            albums: null,
            genres: null,
        },
        {
            id: '3FZ4GX2mWNn7XElse3fQWd',
            name: 'Khói',
            followers: 251961,
            image: 'https://i.scdn.co/image/ab6761610000e5eb4d19b6fba8aee38207c35101',
            albums: null,
            genres: null,
        },
        {
            id: '3nGqUwkJHiLPDECMVrX1Sq',
            name: 'Masew',
            followers: 579406,
            image: 'https://i.scdn.co/image/ab6761610000e5eb3384ebf481862099a35cecaa',
            albums: null,
            genres: null,
        },
        {
            id: '3oB1lv9FWDKbNOUvdTw75Q',
            name: 'Bình Gold',
            followers: 178971,
            image: 'https://i.scdn.co/image/ab6761610000e5eb076887518c36920395d20876',
            albums: null,
            genres: null,
        },
        {
            id: '3rjcQ5VIWCN4q7UFetzdeO',
            name: 'JustaTee',
            followers: 803951,
            image: 'https://i.scdn.co/image/ab6761610000e5ebde3d3210433dd11c07678420',
            albums: null,
            genres: null,
        },
        {
            id: '3Tehj7YghQc7zH0I1faGc6',
            name: 'BigDaddy',
            followers: 134618,
            image: 'https://i.scdn.co/image/ab6761610000e5ebeb864b5f2426b9a60b0003f3',
            albums: null,
            genres: null,
        },
        {
            id: '3Wj34lTDJnPp70u4YCl4jz',
            name: 'Lil Wuyn',
            followers: 118457,
            image: 'https://i.scdn.co/image/ab6761610000e5eb115810e1a25d28691bb479f1',
            albums: null,
            genres: null,
        },
        {
            id: '40JnMfFlpwqBnWitkL96g4',
            name: 'Isaac',
            followers: 87130,
            image: 'https://i.scdn.co/image/ab6761610000e5ebcb44ea77e9b885b05ea60e8a',
            albums: null,
            genres: null,
        },
        {
            id: '4grjJqg7iwQ8RKHs8d9Snh',
            name: 'Andree Right Hand',
            followers: 204529,
            image: 'https://i.scdn.co/image/ab6761610000e5eb3dea3ddb7a950a6df930f5dc',
            albums: null,
            genres: null,
        },
        {
            id: '4iFNiWhODcMZdmpNkxsTFp',
            name: 'Wowy',
            followers: 107071,
            image: 'https://i.scdn.co/image/ab6761610000e5eb805a46e981dff62380813e26',
            albums: null,
            genres: null,
        },
        {
            id: '4jQZaxfgwiUJFQagCyZNV4',
            name: 'Ricky Star',
            followers: 46379,
            image: 'https://i.scdn.co/image/ab6761610000e5ebe7012a07d44b58b0d2812c5b',
            albums: null,
            genres: null,
        },
        {
            id: '4RGBKkUyyvsim9vdBKCCkc',
            name: 'Ngo',
            followers: 362645,
            image: 'https://i.scdn.co/image/ab6761610000e5eb6994e627c5b26909bc8ba813',
            albums: null,
            genres: null,
        },
        {
            id: '4w5vfLTFKwpd16ZzmYwcXA',
            name: 'Kimmese',
            followers: 28914,
            image: 'https://i.scdn.co/image/ab6761610000e5eb3b87bafb0a9514918a46b7da',
            albums: null,
            genres: null,
        },
        {
            id: '56su1iNcOlGUPEtBoOoJ5D',
            name: 'Datmaniac',
            followers: 36385,
            image: 'https://i.scdn.co/image/ab6761610000e5eb9b15d1aa00b4d451fe27a455',
            albums: null,
            genres: null,
        },
        {
            id: '5kooMseQPNPTz5y1UCM5UR',
            name: 'Pjpo',
            followers: 10931,
            image: 'https://i.scdn.co/image/ab6761610000e5eb455e8dbc116f4c3286f7ac3e',
            albums: null,
            genres: null,
        },
        {
            id: '5U1dINFKjJlYNOSdMrHlRh',
            name: '16 Typh',
            followers: 235829,
            image: 'https://i.scdn.co/image/ab6761610000e5eb069ab167cd3686484a9e0673',
            albums: null,
            genres: null,
        },
        {
            id: '5UNWQJdUbO8Gbg9Qn3r52M',
            name: 'Touliver',
            followers: 176876,
            image: 'https://i.scdn.co/image/ab6761610000e5ebd1791a8797ebb54224bbe240',
            albums: null,
            genres: null,
        },
        {
            id: '6CGGvCBHWqQ4HXtn5aLhbh',
            name: 'SOOBIN',
            followers: 903448,
            image: 'https://i.scdn.co/image/ab6761610000e5ebfb5c8857f5e7e32bb4873cd6',
            albums: null,
            genres: null,
        },
        {
            id: '6kFhNMq6O8P5QKdqlGMUVW',
            name: 'Tage',
            followers: 73655,
            image: 'https://i.scdn.co/image/ab6761610000e5ebb43b6febe7bc0a4041081179',
            albums: null,
            genres: null,
        },
        {
            id: '6S0JgJU2l6ds1EhZUJMQFk',
            name: 'LK',
            followers: 15590,
            image: 'https://i.scdn.co/image/ab67616d0000b273eb3522af6312545527136a30',
            albums: null,
            genres: null,
        },
        {
            id: '6UiKZD9yB7Gxjol62s431k',
            name: 'Seachains',
            followers: 28657,
            image: 'https://i.scdn.co/image/ab6761610000e5eb8970471e4c583e41a7e22ad0',
            albums: null,
            genres: null,
        },
        {
            id: '75Ki5hBCOpDtKGoFyTvLxP',
            name: 'Lou Hoàng',
            followers: 371273,
            image: 'https://i.scdn.co/image/ab6761610000e5eb844ad06e3ff96e7b88b18660',
            albums: null,
            genres: null,
        },
        {
            id: '7zrxCdVQeT3t5LAN3Jpavs',
            name: '95G',
            followers: 19214,
            image: 'https://i.scdn.co/image/ab6761610000e5ebbdd8957071e80b283bedff32',
            albums: null,
            genres: null,
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
    function handleChooseSong(song) {
        hooks.song.setSong(song);
        hooks.listSong.setListSong(songs);
        hooks.show.setShowDashBoard(true);
    }
    return (
        <>
            <DefaultLayout newfeed={'true'}>
                <HorizontalList
                    onClick={() => {
                        console.log('click');
                    }}
                    title="Popular albums"
                >
                    {albums.map((item, index) => {
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
                    {artistss.map((item, index) => {
                        return (
                            <div className={clsx(styles.itemWrapper)}>
                                <CircleItem key={index} data={item} />
                            </div>
                        );
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
                            {songs.map((item, index) => {
                                return (
                                    <ItemList
                                        onClick={() => handleChooseSong(item)}
                                        key={index}
                                        data={item}
                                        index={index + 1}
                                    />
                                );
                            })}
                        </div>
                    </Widget>
                </div>
            </DefaultLayout>
        </>
    );
}

export default Home;
