const SETLOGIN = 'SETLOGIN'

const mutations = {
    [SETLOGIN](state,param){
        state.userName = param.userName;
        state.isLogin = true;
    }
}

export default mutations;