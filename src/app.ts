import "dotenv/config";
import express from "express";
import http from "http";
import  cors from  "cors";
import { Server } from "socket.io";
import { router } from "./routes"; 

const app = express();


app.use(express.static('public'));
app.use(cors());

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
    cors:{
        origin:"*"
    }
});

io.on("connection", socket =>{
    console.log(`Usuário conectado no socket ${socket.id}`);
})


app.use(express.urlencoded({extended:false}));
app.use(express.json());




app.get("/github", (req, res) =>{
    return res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})


app.get("/sigin/callback", (req, res) =>{
    const { code } = req.query;
    return res.status(201).json(code);
});

app.use(router);


export { serverHttp, io}