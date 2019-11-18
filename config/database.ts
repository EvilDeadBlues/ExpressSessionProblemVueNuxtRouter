import MariaDB from "mariadb";

const pool = MariaDB.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'streaming',
    password: 'pawla',
    database: 'session_issue',
    connectionLimit: 5,
});

export default pool;