import axios from 'axios'
import router from '../../router'

export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_ROOT_URL}/user/login`, payload)
          .then(result => {
            resolve(result)
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `https://${process.env.VUE_APP_ROOT_URL}/user/register`,
            payload
          )
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      localStorage.removeItem('cart')
      localStorage.removeItem('role')
      context.commit('delUser')
      router.push('/login')
    },
    interceptorsRequest(context) {
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorsResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (
            error.response.data.status === 403 &&
            (error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature' ||
              error.response.data.msg === 'jwt expired' ||
              error.response.data.msg === 'jwt malformed')
          ) {
            context.dispatch('logout')
            alert(error.response.data.message)
          }
          return Promise.reject(error)
        }
      )
    },
    updateProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_ROOT_URL}/user/${payload.id}`,
            payload.data
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getUserByid(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_ROOT_URL}/user/${payload}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    patchImage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_ROOT_URL}/user/image/${payload.id}`,
            payload.data
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteImage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `https://${process.env.VUE_APP_ROOT_URL}/user/image/${payload}`
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    dataUser: state => state.user,
    isLogin: state => state.token !== null
  }
}
