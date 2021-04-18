import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import HomePage from "./components/pages/HomePage";
import RecipesPage from "./components/pages/RecipesPage";
import RecipeCreatePage from "./components/pages/RecipeCreatePage";
import RecipePage from "./components/pages/RecipePage";
import FavoritesPage from "./components/pages/FavoritesPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/recipes', component: RecipesPage },
        { path: '/recipe/new', component: RecipeCreatePage },
        { path: '/recipe/:id', component: RecipePage, props: true },
        { path: '/favorites', component: FavoritesPage }
    ]
});

createApp(App).use(router).mount('#app')
