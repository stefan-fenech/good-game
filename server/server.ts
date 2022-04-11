if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

import express, { Request, Response } from "express";
import path from "path";
import axios from 'axios';
import cors from 'cors';

const PORT = process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;
const app = express();
const API_KEY = process.env.API_KEY;

app.set("trust proxy", 1);
app.use(express.json()); // support json encoded bodies
app.use(cors())

app.get("/games", (req: Request<any, any, any, any>, res: Response<any>) => {
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`).then((response)=> {
        res.json(response.data)
    })
});

app.post("/search", (req: Request<any, any, any, any>, res: Response<any>, next) => {
    let { query } = req.body;
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`).then((response)=> {
        res.json(response.data)
    })
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "build")));

    app.get("/*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "client", "build", "index.html")
        );
    });
}

app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});