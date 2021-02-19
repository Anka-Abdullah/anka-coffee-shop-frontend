import axios from 'axios'

export default {
  modules: {},
  state: {
    history: [],
    chart: [],
    dashboardDay: '',
    dashboardMonth: '',
    dashboardYear: ''
  },
  mutations: {
    setHistory(state, payload) {
      state.history = payload.data
    },
    setChart(state, payload) {
      state.chart = payload.data
    },
    setDashboardDay(state, payload) {
      state.dashboardDay = payload.data
    },
    setDashboardMonth(state, payload) {
      state.dashboardMonth = payload.data
    },
    setDashboardYear(state, payload) {
      state.dashboardYear = payload.data
    }
  },
  actions: {
    getHistory({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/history/?userId=${payload}`)
          .then(result => {
            resolve(result)
            commit('setHistory', result.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getDashboard(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_ROOT_URL}/history/dashboard/?userId=${payload.userId}&time=${payload.time}`
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    createInvoice(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/history/invoice`, payload)
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
          .post(`${process.env.VUE_APP_ROOT_URL}/history/id`)
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
            `${process.env.VUE_APP_ROOT_URL}/history/${payload.id}`,
            payload.dataHistory
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getChart(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_ROOT_URL}/history/chart/?userId=${payload.userId}&time=${payload.time}`
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    setHistory: state => state.history,
    setChart: state => state.chart,
    setDashboard: state => state.dashboard
  }
}
