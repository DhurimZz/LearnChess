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
  app.post('/articles',
    ArticlesController.post)
}
