<template>
  <div id="nav">
    <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
    >{{ link }}</router-link>
    <div v-if="userDisplay" class="user">Welcome, {{ userDisplay.name }}</div>
  </div>
  <div id="contents">
    <router-view
            v-bind:recipes="recipes"
            v-on:update-recipes="loadRecipes"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: 'App',
  data() {
    return {
      recipes: [],
      links: ['Home', 'Recipes', 'Add a Recipe', 'Mouth-Watering Favorites', 'Account'],
      paths: {
        "Home": '/',
        "Recipes": '/recipes',
        "Add a Recipe": '/recipe/new',
        'Mouth-Watering Favorites': '/favorites',
        'Account': '/account'
      }
    }
  },
  computed: {
    userDisplay() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.loadRecipes();
  },
  methods: {
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
