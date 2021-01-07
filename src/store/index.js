import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import Product from './modules/product'
import Coupon from './modules/coupon'
import Auth from './modules/auth'
import Cart from './modules/cart'
import History from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Coupon, Cart, History },
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
