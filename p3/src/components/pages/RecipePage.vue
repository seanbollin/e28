<template>
    <div v-if="recipeNotFound">
        <p>Recipe {{ id }} not found.</p>
        <router-link v-bind:to="'/recipes'">Go to all recipes</router-link>
    </div>

    <div v-else-if="recipe">
        <show-recipe v-bind:recipe="recipe"></show-recipe>
    </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";

export default {
    components: {
        "show-recipe": ShowRecipe
    },
    props: {
        id: {
            type: String
        },
        recipes: {
            type: Array,
            default: null
        }
    },
    data() {
        return {};
    },
    computed: {
        recipe() {
            return this.recipes.filter((recipe) => {
                return recipe.id == this.id;
            }, this.id)[0];
        },
        recipeNotFound() {
            return this.recipe == null;
        }
    }
}
</script>

<style></style>
