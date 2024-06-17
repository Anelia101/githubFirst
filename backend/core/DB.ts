import mysql2 from "mysql2";
import {Pool} from "mysql2/promise";

export class DB  {
    conn: Pool;

    constructor(){
        this.conn = mysql2.createPool({
            host: "localhost",
            database: "our_project",
            user: "root",
            password: ""
         }).promise();
    }
}