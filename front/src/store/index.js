import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        userName:''
    },
    mutations: {
        bindUserName(state,param){
            state.userName = param.userName;
        }
    }
});

export default store;