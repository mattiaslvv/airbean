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
    userID: "login",
    orderHistory: [],
    orderHistorySpent: 0,
    userEmail: false
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
    changeUserEmail(state, userEmail) {
      state.userEmail = userEmail
    },
    getOrderHistory(state, orders) {
      state.orderHistory = orders
    },
    localStorage(state) {
      console.log('App mounted!');
      if (localStorage.getItem('uuid')) {
        const data = JSON.parse(localStorage.getItem('uuid'))
        const dataUID = data.userID
        state.userID = dataUID
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
      if (context.state.userID == 'login') {
        await context.dispatch('getNewUserID')
      }
      const order = {
        userID: context.state.userID,
        items: context.state.cart,
        totalValue: context.state.totalPrice
      }
      const data = await API.addOrder(order)
      context.commit('postOrder', data)
      return true
    },
    async getNewUserID(context, userinfo) {
      if (userinfo) {
        const data = await API.getKey()
        await context.dispatch('changeThisUserID', data.data)
        context.dispatch('persistance', userinfo)
        return true
      } else {
        const data = await API.getKey()
        await context.dispatch('changeThisUserID', data.data)
        context.dispatch('persistance')
        return true
      }
    },
    async getOrderHistory(context, userID) {
      const data = await API.getOrderHistory(userID)
      context.commit('getOrderHistory', data.data)
    },
    addThisToCart(context, id) {
      context.commit('addToCart', id)
    },
    removeThisFromCart(context, id) {
      context.commit('removeFromCart', id)
    },
    persistance(context, userinfo) {
      console.log('uuid created');
      if (userinfo) {
        const data = {
          userID: context.state.userID,
          username: userinfo.username,
          email: userinfo.email
        }
        localStorage.setItem('uuid', JSON.stringify(data))
        context.commit("changeUserEmail", userinfo.email)
      } else {
        const data = {
          userID: context.state.userID
        }
        localStorage.setItem('uuid', JSON.stringify(data))
      }
    },
    updateUserInfo(context, userinfo) {
      const data = {
        userID: context.getters.checkUserID,
        username: userinfo.username,
        email: userinfo.email
      }
      localStorage.setItem('uuid', JSON.stringify(data))
    },
    changeThisUserID(context, userID) {
      context.commit('changeUserID', userID)
      return true
    },
  },
  getters: {
    totalPrice(state) {
      state.totalPrice = 0
      state.cart.forEach(item => state.totalPrice += item.price)
      return state.totalPrice
    },
    orderHistorySpent(state) {
      state.orderHistorySpent = 0
      state.orderHistory.forEach(item => state.orderHistorySpent += item.totalValue)
      return state.orderHistorySpent
    },
    checkUserID() {
      const data = JSON.parse(localStorage.getItem('uuid'))
      if (data == null) {
        return 'login'
      } else {
        return data.userID
      }
    },
    getUserName() {
      const data = JSON.parse(localStorage.getItem('uuid'))
      if (data == null) {
        return false
      } else {
        return data.username
      }
    },
    getUserEmail(state) {
      if (state.userEmail) {
        return state.userEmail
      }
      const data = JSON.parse(localStorage.getItem('uuid'))
      if (data == null) {
        return false
      } else {
        state.userEmail = data.email
        return state.userEmail
      }
    }
  }
})