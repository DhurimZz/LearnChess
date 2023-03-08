const { Article } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const articles = await Article.findAll({
                limit: 10
            })
            res.send(articles)
        } catch (err) {
            res.status(500).send({
                error: 'an error has ocured trying to fetch the articles.'
            })
        }
    },
    async post (req, res) {
        try {
            const article = await Article.create(req.body)
            console.log('article created.')
            res.send(article)
        } catch (err) {
            res.status(500).send({
                error: 'an error has ocured trying to create the article.'
            })
        }
    }
}
