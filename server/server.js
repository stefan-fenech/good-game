import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT || (process.env.NODE_ENV === 'production' && 3000) || 3001;
const app = express();

const api_key = process.env.API_KEY;

app.use(express.json()); // support json encoded bodies

app.get('/', (req, res) => {
    res.json({ key: api_key });
});

app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
