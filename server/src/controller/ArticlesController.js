const { Article } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const articles = await Article.findAll()
            res.send(articles)
        } catch (err) {
            res.status(500).send({
                error: 'an error has ocured trying to fetch the articles.'
            })
        }
    },
    async getLastArticles (req, res) {
        try {
            const articles = await Article.findAll({
                limit: 3,
                order: [['createdAt', 'DESC']]
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
            res.send(article)
        } catch (err) {
            res.status(500).send({
                error: 'an error has ocured trying to create the article.'
            })
        }
    },
    async show (req, res) {
        try {
            const article = await Article.findByPk(req.params.articleId)
            res.send(article)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to show the articles'
            })
        }
    },
    async put (req, res) {
        try {
            await Article.update(req.body, {
                where: {
                    id: req.params.articleId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to update the article'
            })
        }
    }
}
