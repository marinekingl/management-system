import db from '../../db'

const state = {
    user: db,
    Form: {
        userS: "",
        pwdS: ""
    },
    flag:false
}
const getters = {

}

const actions = {

}

const mutations = {
    login(state,all) {
        state.Form = all
        for (let i = 0; i < state.user.length; i++) {
            if (
                state.Form.userS == state.user[i].username &&
                state.Form.pwdS == state.user[i].password
            ) {
                 state.flag = true 
            }
        }
      return state.flag 
    },
    
}


export default {
    state,
    getters,
    actions,
    mutations
}