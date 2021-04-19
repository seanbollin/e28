<template>
  <div id="nav">
    <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
    >{{ link }}</router-link>
  </div>
  <div id="contents">
    <router-view
            v-bind:recipes="recipes"
            v-bind:favorites="favorites"
            v-on:update-recipes="loadRecipes"
            v-on:add-favorite="addFavorite"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: 'App',
  data() {
    return {
      favorites: [],
      recipes: [],
      links: ['Home', 'Recipes', 'Add a Recipe', 'Mouth-Watering Favorites'],
      paths: {
        "Home": '/',
        "Recipes": '/recipes',
        "Add a Recipe": '/recipe/new',
        'Mouth-Watering Favorites': '/favorites'
      }
    }
  },
  mounted() {
    this.loadRecipes();
  },
  methods: {
    addFavorite(favorite) {
      this.favorites.push(favorite);
    },
    loadRecipes() {
      axios.get("recipe").then((response) => {
        this.recipes = response.data.recipe;
      })
    }
  }
}
</script>

<style src='@/assets/css/jimbos.css'></style>

<style></style>
