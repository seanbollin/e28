import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/common/store';

// Define all the routes of our application
const routes = [
    {
        path: '/',
        // Rather than having to have separate import statements at the top of this page for each component
        // Here’s a simple way we can directly make our components available
        component: () => import('../components/pages/HomePage.vue'),
    },
    {
        path: '/recipes',
        component: () => import('../components/pages/RecipesPage.vue'),
    },
    {
        path: '/recipe/new',
        component: () => import('../components/pages/RecipeCreatePage.vue'),
        // Note the addition of this meta attribute:
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/recipe/:id',
        component: () => import('../components/pages/RecipePage.vue'),
        props: true,
    },
    {
        path: '/account',
        component: () => import('../components/pages/AccountPage.vue'),
    },
    {
        path: '/favorites',
        component: () => import('../components/pages/FavoritesPage.vue'),
    },
    {
        // This is a route we can direct the user to if they try to access
        // a part of the site they don’t have privileges for
        path: '/denied',
        component: () => import('../components/pages/AccessDeniedPage.vue'),
    }
];

// Initialize our router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to) => {

    // Exact the meta information from our routes
    // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // Put the “decide what to do” code into a method so we can wait to invoke it
    // once we have the user data
    const decide = (user) => {
        if (requiresAuth && !user) {
            // If they’re trying to access a requiresAuth route and they’re not logged in,
            // they get sent to “Access Denied” page
            return '/denied';
        } else {
            // Otherwise, allow them to intended destination
            return true;
        }
    };

    // If we don’t have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        // Observe how this code expects our authUser action to be asynchronous
        let authUser = await store.dispatch('authUser');
        if (authUser !== null) {
            return decide(store.state.user);
        }
    } else {
        return decide(store.state.user);
    }
});

export { router };