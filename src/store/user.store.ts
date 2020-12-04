import Api from '../services/http';

const state = {
    users: []
}

const getters = {
    LIST_USERS(state:any) {
        return state.users
    },
}

const actions = {
    GET_USERS: async ({ state, commit }: any) => {
        Api.getUsers(true)
            .then(response => {
                console.log(response)
                commit('SET_USERS', response)
            })
            .catch(e => {
                console.log(e);
            });
    }
}

const mutations = {
    SET_USERS(state: any, users: any) {
        state.users = users;
    }
}

const USERS = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

export default USERS;
