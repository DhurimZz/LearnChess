const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ArticlesController = require('./controller/ArticlesController')
const ContactUsController = require('./controller/ContactUsController')

module.exports = (router) => {
  router.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  router.post('/login', AuthenticationController.login)

  router.get('/articles', ArticlesController.index)
  router.get('/articles/get-last-articles', ArticlesController.getLastArticles)
  router.post('/articles', ArticlesController.post)
  router.get('/articles/:articleId', ArticlesController.show)
  router.put('/articles/:articleId', ArticlesController.put)
  router.delete('/articles/:articleId', ArticlesController.delete)

  router.get('/contactus', ContactUsController.index)
  router.post('/contactus', ContactUsController.post)
  router.delete('/contactus/:contactusId', ContactUsController.delete)
}
