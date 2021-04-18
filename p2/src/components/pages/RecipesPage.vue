<template>
    <h1>Jimbo's Recipes</h1>
    <div id="recipes">
        <div v-bind:key="recipe.id" v-for="recipe in recipes">
            <show-recipe
                    v-bind:recipe="recipe"
                    v-bind:detailed="false"
            ></show-recipe>
            <router-link v-bind:to="'/recipe/' + recipe.id">Details</router-link>
            <button v-on:click="addFavorite(recipe)">Add Favorite</button>
        </div>
    </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
export default {
    inheritAttrs: false,
    components: {
        "show-recipe": ShowRecipe,
    },
    props: {
        recipes: {
            type: Array,
            default: null,
        },
    },
    data() {
        return {};
    },
    methods: {
        addFavorite(favorite) {
            this.$emit('add-favorite', favorite);
        }
    }
};
</script>

<style>

</style>
