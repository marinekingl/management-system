import Vue from 'vue'
import Vuex from 'vuex'
import print from './print'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      print
    }
})
