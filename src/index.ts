import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import {router} from './routes/users.router';
import {routerComment} from './routes/comment.router';
import {db} from './config/db';
import {routerReactions} from "./routes/reaction.router";


const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users',router)
app.use('/api/comments',routerComment)
app.use('/api/reactions',routerReactions)


app.get('/', (req: Request, res: Response) => {
    res.send('AAAAAAAAAAAAAAAAAAAAa');
});


db.then(() =>
    app.listen(PORT, ()=> {
        console.log(`server running on http://localhost:${PORT}`);
    })
);

