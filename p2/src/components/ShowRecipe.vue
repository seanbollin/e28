<template>
  <div class="show-recipe">
    <div class="name">{{ recipe.name }}</div>
    <div class="description">{{ recipe.description }}</div>
    <div class="ingredients">Ingredients: {{ recipe.ingredients }}</div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object
    }
  }
}
</script>

<style>

</style>
