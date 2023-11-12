import { Route, Routes } from 'react-router-dom';
import Heading from './layoout/components/Heading';
import DefaultLayout from './layoout/DefaultLayout';
import { publicRoutes } from './route';
import Favorite from './pages/Favorite';
import Layer from './layoout/components/Layer';
import SquarePaner from '~/images/SquarePaner.png';
import { useState } from 'react';
import axios from 'axios';
function App() {
    const [song, setSong] = useState();
    const [listSong, setListSong] = useState([]);
    const [showDashboard, setShowDashBoard] = useState(false);
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.component
                                    hooks={{
                                        song: { song, setSong },
                                        show: { showDashboard, setShowDashBoard },
                                        listSong: { listSong, setListSong },
                                    }}
                                />
                            }
                        />
                    );
                })}
            </Routes>
            {showDashboard && (
                <Layer
                    data={{ image: SquarePaner, title: 'Newjeans', subtitle: 'newjeans' }}
                    hooks={{ song, setSong, listSong }}
                />
            )}
        </div>
    );
}

export default App;
