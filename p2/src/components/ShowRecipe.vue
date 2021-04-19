<template>
  <div class="show-recipe">
    <div class="name"><strong>{{ recipe.name }}</strong></div>
    <div class="description"><em>{{ recipe.description }}</em></div>
    <div class="ingredients">Ingredients: {{ recipe.ingredients }}</div>
  </div>
</template>

<script>
export default {
  props: {
    detailed: {
      type: Boolean,
      default: true
    },
    recipe: {
      type: Object
    }
  }
}
</script>

<style>

</style>
