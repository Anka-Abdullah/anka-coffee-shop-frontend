import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "addproduct" */ '../views/AddProduct.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/DashBoard.vue')
  },
  {
    path: '/addpromo',
    name: 'AddPromo',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "addpromo" */ '../views/AddPromo.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { requiresVisitor: true },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { requiresVisitor: true },
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/auth/Register.vue')
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassWord',
    meta: { requiresVisitor: true },
    component: () =>
      import(
        /* webpackChunkName: "forgotpassword" */ '../views/auth/ForgotPassWord.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
