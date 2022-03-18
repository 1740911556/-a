import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:"我是vuex数据.",
    // 存数据
    dataList:[]
  },
  getters: {
  },
  mutations: {
    // 存数据
    dataListMenthods(state,params){
        state.dataList=params
    }
  },
  actions: {
  },
  modules: {
  }
})
