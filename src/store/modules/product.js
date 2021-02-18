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
    },
    resetPages(state) {
      state.page = 1
    },
    setSearch(state, payload) {
      state.search = payload
    },
    setSort(state, payload) {
      state.sort = payload
    },
    setAsc(state, payload) {
      state.asc = payload
    }
  },
  actions: {
    getProducts({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://${process.env.VUE_APP_ROOT_URL}/product?${
              state.sort !== '' ? 'sort=' + state.sort : ''
            }${state.asc !== '' ? '&asc=' + state.asc : ''}${
              state.search !== '' ? '&search=' + state.search : ''
            }&page=${state.page}&limit=${state.limit}`
          )
          .then(result => {
            resolve(result)
            commit('setProducts', result.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    deleteProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`https://${process.env.VUE_APP_ROOT_URL}/product/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    createProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_ROOT_URL}/product`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    updateProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_ROOT_URL}/product/${payload.id}`,
            payload.data
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
    pageProducts: state => state.page,
    dataProducts: state => state.products,
    pageLimit: state => state.limit,
    pagetotalRows: state => state.totalRows,
    setSearch: state => state.search,
    setSort: state => state.sort,
    setAsc: state => state.asc
  }
}
