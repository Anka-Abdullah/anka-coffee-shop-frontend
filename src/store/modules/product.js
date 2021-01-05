import axios from 'axios'

export default {
  modules: {},
  state: {
    limit: 6,
    page: 1,
    search: '',
    sort: '',
    asc: '',
    products: [],
    totalRows: null
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    setPage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/product?${
              context.state.sort !== '' ? 'sort=' + context.statesort : ''
            }${context.state.asc !== '' ? '&asc=' + context.state.asc : ''}${
              context.state.search !== ''
                ? '&search=' + context.state.search
                : ''
            }&page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(response => {
            resolve(response)
            console.log(response)
            context.commit('setProducts', response.data)
            // this.totalRows = response.data.pagination.totalData
            // this.products = response.data.data
          })
          .catch(error => {
            reject(error)
            console.log(error)
          })
      })
    }
  },
  getters: {
    pageProducts(state) {
      return state.page
    },
    dataProducts(state) {
      return state.products
    },
    pageLimit(state) {
      return state.limit
    },
    pagetotalRows(state) {
      return state.totalRows
    }
  }
}
