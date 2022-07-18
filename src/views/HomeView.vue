<template>
  <main>
    <BoardColumnItem
      v-for="(column, index) in columnIds"
      :key="index"
      :columnId="column"
    ></BoardColumnItem>
  </main>
</template>

<script setup lang="ts">
import BoardColumnItem from "../components/BoardColumnItem.vue";
import { useBoardStore } from "@/stores/board";

const boardStore = useBoardStore();

const columnIds = boardStore.items;
</script>

<style lang="scss">
main {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  padding: 2rem;
}
</style>
