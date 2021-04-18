<template>
    <h1>Jimbo's Recipes</h1>
    <div id="recipes">
        <router-link
                class="recipe-link"
                v-for="recipe in recipes"
                v-bind:to="'/recipe/' + recipe.id"
                v-bind:key="recipe.id"
        >
            <show-recipe
                    v-bind:recipe="recipe"
                    v-bind:detailed="false"
            ></show-recipe>
        </router-link>
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
};
</script>

<style>

</style>
