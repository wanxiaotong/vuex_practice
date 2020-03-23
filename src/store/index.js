import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add1 (state) {
      // mutation不能异步操作，mutation必须同步
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub1 (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    add1Async (context) {
      setTimeout(() => {
        context.commit('add1')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    sub1Async (context) {
      setTimeout(() => {
        context.commit('sub1')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  modules: {
  },
  getters: {
    showNum (state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
