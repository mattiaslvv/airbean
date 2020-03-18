import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    cartItem: {},
    totalprice: 0,
    menuItems: [],
    orderInfo: {}
  },
  mutations: {
    getMenu(state, data) {
      state.menuItems = data
    },
    postOrder(state, data) {
      state.orderInfo = data
    }
  },
  actions: {
    async fetchMenuItems(context) {
      const data = await API.getItems()
      context.commit('getMenu', data)
      return true
    },
    async postOrderItems(context) {
      const data = await API.postItems()
      context.commit('postOrder', data)
      return true
    }
  },
  modules: {}
})