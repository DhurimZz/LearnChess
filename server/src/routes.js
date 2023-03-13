const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ArticlesController = require('./controller/ArticlesController')
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login)

  app.get('/articles',
    ArticlesController.index)
  app.get('/articles/get-last-articles',
    ArticlesController.getLastArticles)
  app.post('/articles',
    ArticlesController.post)
  app.get('/articles/:articleId',
    ArticlesController.show)
    app.put('/articles/:articleId',
    ArticlesController.put)
}
