<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Hello there!</h1>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 1rem;
}
</style>
