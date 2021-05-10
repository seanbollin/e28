import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    actions: {
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        }
    },
    state() {
        return {
            favorites: [],
            user: null
        }
    },
    mutations: {
        addFavorite(state, favorite) {
            state.favorites.push(favorite);
        },
        setUser(state, payload) {
            state.user = payload;
        }
    }
});