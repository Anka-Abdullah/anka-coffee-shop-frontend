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
    deleteImage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://${process.env.VUE_APP_ROOT_URL}/product/image/${payload}`
          )
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
    },
    updateImage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://${process.env.VUE_APP_ROOT_URL}/product/image/${payload.id}`,
            payload.data
          )
          .then(result => {
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
    },
    setSearch(state) {
      return state.search
    },
    setSort(state) {
      return state.sort
    },
    setAsc(state) {
      return state.asc
    }
  }
}
