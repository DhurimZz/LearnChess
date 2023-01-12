module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'learnchess',
        user: process.env.DB_USER || 'learnchess',
        password: process.env.DB_PASS || 'learnchess',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './learnches.sqlite'
        }

    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
