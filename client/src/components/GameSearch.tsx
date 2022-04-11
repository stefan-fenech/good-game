import axios from 'axios';
import { useEffect, useState } from 'react';
import { GameResult } from './GameResult';
import { SearchBar } from './SearchBar';

export function GameSearch(props: any) {
    const [value, setValue] = useState<string>('');
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [initialList, setInitalList] = useState<any[]>([]);

    const API_KEY = process.env.REACT_APP_API_KEY;

    // Populate page with random set of games (most likely current popular games)
    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`).then((response) => {
            setInitalList(response.data.results);
        });
    });

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const onSubmit = () => {
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${value}`).then((response) => {
            setSearchResult(response.data.results);
        });
    };

    return (
        <div>
            <SearchBar onChange={handleChange} onClick={onSubmit} />
            <h1>Search Results:</h1>
            <div id='result-container'>
                {searchResult.length < 1
                    ? initialList.map((initialResult: any) => <GameResult name={initialResult.name} screenshot={initialResult.short_screenshots[0].image} id={initialResult.id} />)
                    : searchResult.map((result: any) => <GameResult name={result.name} screenshot={result.short_screenshots[0].image} id={result.id} />)}
            </div>
        </div>
    );
}
