<template>
    <div>
        <h1>Think You Can Make Somethin' Good?</h1>

        <div id="inputs">
            <label for="name">Name (min. 3, max. 100)</label>
            <input type="text" v-model="recipe.name" id="name" v-on:blur="validate"/>
            <br />
            <label for="description">Description (max. 100)</label>
            <textarea v-model="recipe.description" id="description" v-on:blur="validate"></textarea>
            <br />
            <label for="ingredients">Ingredients</label>
            <input type="text" v-model="recipe.ingredients" id="ingredients" v-on:blur="validate"/>
        </div>

        <button v-on:click="addRecipe">Add Recipe</button>

        <div class="success" v-if="success">Your recipe was added</div>

        <ul v-if="errors">
            <li class="error" v-for="(error, index) in errors" :key="index">
                {{ error[0] }}
            </li>
        </ul>
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
            this.success = false;
            if (this.validate()) {
                axios.post("/recipe", this.recipe).then((response) => {
                    if (response.data.errors) {
                        this.errors = response.data.errors;
                        this.success = false;
                    } else {
                        this.$emit("update-recipes");
                        this.success = true;
                        this.recipe = {};
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
