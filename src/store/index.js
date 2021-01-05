import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import Product from './modules/product'
import Coupon from './modules/coupon'
import Auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Coupon },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedstate({
      paths: ['Auth.user']
    })
  ]
})
