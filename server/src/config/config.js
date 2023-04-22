module.exports = {
    port: process.env.PORT || 8081,
    db: {
        url: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/learnchess',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
