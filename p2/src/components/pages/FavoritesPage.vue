<template>
    <h1>Mouth-Watering Favorites</h1>
    <div id="recipes">
        <router-link
                class="recipe-link"
                v-for="favorite in favorites"
                v-bind:to="'/recipe/' + favorite.id"
                v-bind:key="favorite.id"
        >
            <show-recipe
                    v-bind:recipe="favorite"
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
        favorites: {
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
