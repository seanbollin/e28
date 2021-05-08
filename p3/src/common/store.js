import { createStore, createLogger } from 'vuex'

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            favorites: []
        }
    },
    mutations: {
        addFavorite(state, favorite) {
            state.favorites.push(favorite);
        }
    }
});