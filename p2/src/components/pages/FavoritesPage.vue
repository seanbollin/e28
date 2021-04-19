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

{
"seeds": [
{
"name": "Roadkill Rigatoni",
"description": "Fresh from the corner of 5th and Blanch. Just mix, heat, and serve!",
"ingredients": "opposum,racoon,tobacco"
},
{
"name": "Lizard Stew",
"description": "Salt water crocodile with a hint of bacon. First cook the bacon, then the crocodile. Add a twist of lime.",
"ingredients": "crocodile,bacon,lime"
},
{
"name": "Bayou Breakfast",
"description": "Your standard fare. Not much too it.",
"ingredients": "eggs,sausage,bacon"
},
{
"name": "Mama's Buttery Biscuits",
"description": "Slap the butter on and eat. Yum!",
"ingredients": "butter,bread"
},
{
"name": "Fritzy Gritz",
"description": "A time-honored classic. Pour the gritz on the skiddle, flip after brown, then serve.",
"ingredients": "grits"
}
]
}

