import {Router} from "express";
import {getBooks, getBook} from "../controllers/BookController";


export const bookRouter = Router();
bookRouter.get("/books", getBooks);
bookRouter.get("/user/:id", getBook);