import express from "express";


const app = express();
import "dotenv/config";
import { router } from "./routes"; 

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


app.listen(4000, () => console.log(`Node.js + Typescript + Prisma 🚀`));