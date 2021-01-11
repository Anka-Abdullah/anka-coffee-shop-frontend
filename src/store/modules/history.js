import axios from 'axios'

export default {
  modules: {},
  state: {
    history: [],
    invoices: [],
    chart: [],
    dashboard: []
  },
  mutations: {
    setInvoices(state, payload) {
      state.invoices = payload.data
    },
    setHistory(state, payload) {
      state.history = payload.data
    }
  },
  actions: {
    getInvoices({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/history/${payload}`)
          .then(result => {
            resolve(result)
            commit('setInvoices', result.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getHistory({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/history/b`)
          .then(result => {
            resolve(result)
            commit('setHistory', result.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    createInvoice(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `http://${process.env.VUE_APP_ROOT_URL}/history/invoice`,
            payload
          )
          .then(result => {
            resolve(result)
            alert('success post data')
          })
          .catch(err => {
            reject(err)
            alert('ERROR')
          })
      })
    },
    getPostKey() {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_ROOT_URL}/history/id`)
          .then(result => {
            resolve(result.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    postHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://${process.env.VUE_APP_ROOT_URL}/history/${payload.id}`,
            payload.dataHistory
          )
          .then(result => {
            resolve(result)
            alert('success post history')
          })
          .catch(err => {
            reject(err)
            alert('gagal post history')
          })
      })
    }
  },
  getters: {
    setHistory: state => state.history,
    setInvoices: state => state.invoices,
    setChart: state => state.chart,
    setDashboard: state => state.dashboard
  }
}
