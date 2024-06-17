import {Request, Response} from "express";
import {DB} from "../core/DB";
import {BookModel} from "../models/BookModel";


const db = new DB();
const bookModel  = new BookModel(db)


const getBooks = async (req: Request, res: Response) => {
    const data = await bookModel.getAllBooks();
    res.send(data);
}
const getBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await bookModel.getSingleBook(parseInt(id));
    res.send(data);
}

export {
    getBooks,
    getBook
}