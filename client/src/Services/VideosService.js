import ApiNet from './ApiNet'

export default {
  index () {
    return ApiNet().get('Videos/VideosPage')
  }
}
