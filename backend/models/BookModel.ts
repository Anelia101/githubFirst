//import {Book} from "../types/book"
export class BookModel {
    conn;

    constructor(db: any){
        this.conn = db.conn;
    }

    async getAllBooks()  {
        const [rows] = await this.conn.query("SELECT * FROM books");
        return rows;
    }
    async getSingleBook(id: number) {
        const [rows] = await this.conn.query("SELECT * FROM books WHERE id = ?", [id]);
        return rows[0];
    }
}
