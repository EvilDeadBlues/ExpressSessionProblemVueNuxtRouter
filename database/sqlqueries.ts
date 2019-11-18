enum SQLQueries {
    findUserQuery = "SELECT * FROM `users` WHERE username = ?",
    insertUserQuery = "INSERT INTO `users` (`id`, `username`, `email`, `ip`, `password`) VALUES (NULL, ?, ?, ?, ?);",
};

export default SQLQueries;