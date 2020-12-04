import Api from '../services/http';
import User from '../models/User';
import Authentication from '../models/Authentication';

const state = {
    users: Array<User>(),
    user:User,
    authentication: Authentication
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
                commit('SET_USERS', response);
            })
            .catch(e => {
                console.log(e);
            });
    },

    LOGIN_USER: async ({ state, commit}: any, user: User ) => {
        const body = {
            login: {
              username: user.user_nicename,
              password: user.user_pass
            }
          };
        Api.post("/login", body).then(result => {
            const authentication = (result && result.authenticated)
            ? new Authentication(user.user_nicename, true)
            : null;
            commit('SET_AUTHENTICATION', authentication);
            console.log({ LOGIN_USER: result, user: user});
        });
    },

    LOGOUT_USER: async ({ state, commit }: any) => {
        console.log({ LOGOUT_USER: state});
        commit('SET_AUTHENTICATION', null);
    },
}

const mutations = {
    SET_USERS(state: any, users: any) {
        state.users = users;
    }
    ,SET_AUTHENTICATION(state: any, authentication: any) {
        state.authentication = authentication;
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
