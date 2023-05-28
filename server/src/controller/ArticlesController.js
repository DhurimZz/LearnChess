const Article = require('../models/Article')

module.exports = {
    async index (req, res) {
        try {
            const articles = await Article.find({})
            res.send(articles)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occurred trying to fetch the articles.'
            })
        }
    },
    async getLastArticles (req, res) {
        try {
            const articles = await Article.find({})
                .sort({ createdAt: -1 })
                .limit(3)
            res.send(articles)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occurred trying to fetch the articles.'
            })
        }
    },
    async post (req, res) {
        try {
          const article = await Article.create(req.body)
          res.send(article)
        } catch (err) {
          console.error(err)
          res.status(500).send({
            error: `an error has occurred trying to create the article: ${err.message}`
          })
        }
      },
    async show (req, res) {
        try {
            const article = await Article.findById(req.params.articleId)
            res.send(article)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occurred trying to show the article'
            })
        }
    },
    async put (req, res) {
        try {
            await Article.findByIdAndUpdate(req.params.articleId, req.body)
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occurred trying to update the article'
            })
        }
    },
    async delete (req, res) {
        try {
            const { articleId } = req.params
            const deletedCount = await Article.deleteOne({ _id: articleId })
            if (deletedCount.deletedCount === 0) {
                return res.status(404).send({
                    error: 'Article not found'
                })
            }
            res.send({ message: 'Article deleted successfully' })
        } catch (err) {
            console.error(err)
            res.status(500).send({
                error: 'an error occurred while deleting the article'
            })
        }
    }
}
