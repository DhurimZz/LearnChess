import Api from '@/services/Api'

export default {
  index () {
    return Api().get('contactus')
  },
  post (contactus) {
    return Api().post('contactus', contactus)
  },
  delete (contactusId) {
    return Api().delete(`contactus/${contactusId}`)
  }
}
