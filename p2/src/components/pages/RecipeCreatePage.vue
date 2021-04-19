<template>
    <div>
        <h1>Think You Can Make Somethin' Good?</h1>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" v-model="recipe.name" id="name" />
            <br />
            <label for="description">Description</label>
            <textarea v-model="recipe.description" id="description"></textarea>
            <br />
            <label for="ingredients">Ingredients</label>
            <input type="text" v-model="recipe.ingredients" id="ingredients" />
        </div>

        <button v-on:click="addRecipe">Add Recipe</button>

        <div v-if="showConfirmation">Your recipe was added</div>

        {{ errors }}
    </div>
</template>

<script>
    import { axios } from "@/common/app.js";
    export default {
        data() {
            return {
                showConfirmation: false,
                errors: null,
                recipe: {
                    name: "Recipe name",
                    description: "Recipe description",
                    ingredients: "list,of,ingredients"
                },
            };
        },
        methods: {
            addRecipe() {
                axios.post("/recipe", this.recipe).then((response) => {
                    if (response.data.errors) {
                        this.errors = response.data.errors;
                        this.showConfirmation = false;
                    } else {
                        this.$emit("update-recipes");
                        this.showConfirmation = true;
                    }
                });
            },
        },
    };
</script>

<style>

</style>