import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    cartItem: {},
    totalPrice: 0,
    menuItems: [],
    orderInfo: {},
    showMenu: false,
    showCart: false,
    userID: "",
  },
  mutations: {
    getMenu(state, data) {
      state.menuItems = data
    },
    postOrder(state, data) {
      state.orderInfo = {
        orderNr: data.orderNumber,
        eta: '13'
      }
    },
    addToCart(state, id) {
      state.cart.push(state.menuItems.find(item => item.id == id))
    },
    removeFromCart(state, id) {
      state.cartItem = state.cart.find(item => item.id == id)
      let index = state.cart.indexOf(state.cartItem)
      state.cart.splice(index, 1)
    },
    changeMenu(state) {
      state.showMenu = !state.showMenu
    },
    changeCart(state) {
      state.showCart = !state.showCart
    },
    changeUserID(state, userID) {
      state.userID = userID
    },
    localStorage(state) {
      console.log('App mounted!');
      if (localStorage.getItem('uuid')) {
        state.userID = JSON.parse(localStorage.getItem('uuid'));
      }
    }
  },
  actions: {
    async fetchMenuItems(context) {
      const data = await API.getItems()
      context.commit('getMenu', data)
      return true
    },
    async postOrderItems(context) {
      if (context.state.userID == '') {
        await context.dispatch('getNewUserID')
      }
      const order = {
        userID: context.getters.checkUserID,
        items: context.state.cart,
        totalValue: context.state.totalPrice
      }
      const data = await API.addOrder(order)
      context.commit('postOrder', data)
      return true
    },
    async getNewUserID(context) {
      const data = await API.getKey()
      await context.dispatch('changeThisUserID', data.data)
      context.dispatch('persistance')
      return true
    },
    addThisToCart(context, id) {
      context.commit('addToCart', id)
    },
    removeThisFromCart(context, id) {
      context.commit('removeFromCart', id)
    },
    persistance(context) {
      console.log('uuid created');
      localStorage.setItem('uuid', context.state.userID);
    },
    changeThisUserID(context, userID) {
      context.commit('changeUserID', userID)
      return true
    }
  },
  getters: {
    totalPrice(state) {
      state.totalPrice = 0
      state.cart.forEach(item => state.totalPrice += item.price)
      return state.totalPrice
    },
    checkUserID() {
      console.log(localStorage.getItem('uuid'))
      return localStorage.getItem('uuid')
    }
  }
})