<template>
    <h1>Mouth-Watering Favorites</h1>
    <div id="recipes">
        <div v-bind:key="favorite.id" v-for="favorite in favorites">
            <show-recipe
                    v-bind:recipe="favorite"
                    v-bind:detailed="false"
            ></show-recipe>
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
    computed: {
        favorites() {
            return this.$store.state.favorites;
        }
    },
    data() {
        return {};
    }
};
</script>

<style></style>
