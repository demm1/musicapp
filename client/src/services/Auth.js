import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// Auth.register ({
//   email: 'demmy@algogear.com',
//   password: '123456'
// })
