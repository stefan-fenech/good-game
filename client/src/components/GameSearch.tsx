import axios from 'axios';
import { useEffect, useState } from 'react';
import { GameResult } from './GameResult';
import { SearchBar } from './SearchBar';

export function GameSearch(props: any) {
    const [value, setValue] = useState<string>('');
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [initialList, setInitalList] = useState<any[]>([]);

    // Populate page with random set of games (most likely current popular games)
    useEffect(() => {
        axios.get(`http://localhost:3001/games/`).then((response) => {
            setInitalList(response.data.results);
        });
    });

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const onSubmit = () => {
        axios.post('http://localhost:3001/search', { query: value }).then((response) => {
            setSearchResult(response.data.results);
        });
    };

    return (
        <div>
            <SearchBar onChange={handleChange} onClick={onSubmit} />
            <h1>Search Results:</h1>
            <div id='result-container'>
                {searchResult.length < 1
                    ? initialList.map((initialResult: any, index: number) => <GameResult name={initialResult.name} screenshot={initialResult.short_screenshots[0].image} id={initialResult.id} key={index} />)
                    : searchResult.map((result: any, index: number) => <GameResult name={result.name} screenshot={result.short_screenshots[0].image} id={result.id} key={index} />)}
            </div>
        </div>
    );
}
