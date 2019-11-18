import database from "../config/database";
import SQLQueries from "./sqlqueries";

let connection;

export namespace Queries {

    export async function findUser(username) {
        connection = await database.getConnection();
        let result = await connection.query(SQLQueries.findUserQuery, username);
        connection.end();
        return result;
    }

    export async function insertUser(username, email, ip, password) {
        connection = await database.getConnection();
        let result = connection.query(SQLQueries.insertUserQuery, [username, email, ip, password]);
        connection.end();
        return result;
    }

};

export default Queries;