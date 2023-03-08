import Api from '@/services/Api'

export default {
  getAllArticles () {
    return Api().get('articles')
  }
}
