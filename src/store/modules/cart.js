export default {
  state: {
    carts: []
  },
  mutations: {
    setCarts(state, payload) {
      state.carts = [...payload]
    }
  },
  actions: {
    addToCart({ commit, state }, payload) {
      console.log(payload)
      let { carts } = state

      const checkId = carts.find(item => item.id === payload.id)
      const checkSize = carts.find(item => item.size === payload.size)
      if (checkId && checkSize) {
        carts = carts.map(item => {
          if (item.id === payload.id && item.size === payload.size) {
            item.qty += Number(payload.qty)
          }

          return item
        })
      } else {
        carts.push(payload)
      }
      commit('setCarts', carts)
    },
    deleteCartItem({ commit, state }, index) {
      const carts = [...state.carts]
      carts.splice(index, 1)
      commit('setCarts', carts)
    }
  },
  getters: { dataCarts: state => state.carts }
}
