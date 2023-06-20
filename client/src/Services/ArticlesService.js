import ApiNet from './ApiNet'

export default {
  index () {
    return ApiNet().get('Articles/ArticlePage')
  }
  // getLastArticles () {
  //   return Api().get('articles/get-last-articles')
  // },
  // post (article) {
  //   return Api().post('articles', article)
  // },
  // put (article) {
  //   return Api().put(`articles/${article.id}`, article)
  // },
  // show (articleId) {
  //   return Api().get(`articles/${articleId}`)
  // },
  // delete (articleId) {
  //   return Api().delete(`articles/${articleId}`)
  // }
}
