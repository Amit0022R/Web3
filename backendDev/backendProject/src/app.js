import express from 'express';
import cors from 'cors';
import cokkieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Adjust this to your frontend's URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json({limit: "16kb"})); // Parse JSON bodies with a limit of 16kb
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app/use(express.static("public")); // Serve static files from the 'public' directory
app.use(cokkieParser()); // Parse cookies


export {app};


