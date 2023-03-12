import Api from '@/services/Api'

export default {
  index () {
    return Api().get('articles')
  },
  getLastArticles () {
    return Api().get('articles/get-last-articles')
  },
  post (article) {
    return Api().post('articles', article)
  }
}
