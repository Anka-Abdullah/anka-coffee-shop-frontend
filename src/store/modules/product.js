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
          .then(result => {
            resolve(result)
            context.commit('setProducts', result.data)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    },
    deleteProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://${process.env.VUE_APP_ROOT_URL}/product/${payload}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
            console.log(error)
          })
      })
    },
    createProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_ROOT_URL}/product`, payload)
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    },
    updateProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://${process.env.VUE_APP_ROOT_URL}/product/${payload.id}`,
            payload.data
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(err => {
            reject(err)
            console.log(err)
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
