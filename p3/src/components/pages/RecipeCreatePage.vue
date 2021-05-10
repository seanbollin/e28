<template>
    <div>
        <h1>Think You Can Make Somethin' Good?</h1>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" v-model="recipe.name" id="name" v-on:blur="validate"/>
            <br />
            <label for="description">Description</label>
            <textarea v-model="recipe.description" id="description" v-on:blur="validate"></textarea>
            <br />
            <label for="ingredients">Ingredients</label>
            <input type="text" v-model="recipe.ingredients" id="ingredients" v-on:blur="validate"/>
        </div>

        <button v-on:click="addRecipe">Add Recipe</button>

        <div v-if="success">Your recipe was added</div>

        <div class="errors">{{ errors }}</div>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from 'validatorjs'

export default {
    data() {
        return {
            success: false,
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
            if (this.validate()) {
                axios.post("/recipe", this.recipe).then((response) => {
                    if (response.data.errors) {
                        this.errors = response.data.errors;
                        this.success = false;
                    } else {
                        this.$emit("update-recipes");
                        this.success = true;
                    }
                });
            }
        },
        validate() {
            let validator = new Validator(this.recipe, {
                name: "required|between:3,100",
                description: "required|max:100",
                ingredients: "required"
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
        },
    }
};
</script>

<style>
.errors {
    color: red;
}
</style>
