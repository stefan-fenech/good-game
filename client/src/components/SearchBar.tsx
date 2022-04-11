import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar(props: any) {
    return (
        <div id='nav'>
            <Button className='search-button' variant='contained' color='success' onClick={props.onClick} startIcon={<SearchIcon />}>
                Search!
            </Button>
            <TextField className='search-field' id='outlined-basic' label='Search for a game...' size='small' variant='outlined' onChange={props.onChange} />
        </div>
    );
}
