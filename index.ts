import express, {Application, json, Request, Response} from "express";
import {userRouter} from "./routers/UserRouter";
import {bookRouter} from "./routers/BookRouter";
const app: Application = express();
const cors = require('cors');

app.use(json());
app.use(cors())
app.use(userRouter);
app.use(bookRouter);

app.listen(8081, ()=> {
    console.log("Server started");
})
