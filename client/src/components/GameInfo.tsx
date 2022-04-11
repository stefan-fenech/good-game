import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function GameInfo(props: any) {
    const [gameInfo, setGameInfo] = useState<any>({});
    let { id } = useParams();

    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`).then((response) => {
            setGameInfo(response.data);
        });
    }, []);

    return (
        <div>
            <h1> Game Info for {gameInfo.name}</h1>
            <p>id: {id}</p>
            <p>Rating: {gameInfo.rating}</p>
        </div>
    );
}
