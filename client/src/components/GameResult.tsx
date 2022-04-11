import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export interface GameResultProps {
    name: string;
    screenshot: any;
    id: number;
}

export function GameResult(props: GameResultProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' height='140' image={props.screenshot} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    {props.id}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/game/${props.id}`}>
                    <Button size='small'>Details</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
