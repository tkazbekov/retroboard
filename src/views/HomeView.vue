<template>
  <main>
    <BoardColumnItem v-for="(column, index) in boardStore.board?.columns" :key="index" :column="column">
    </BoardColumnItem>
  </main>
</template>

<script setup lang="ts">
import BoardColumnItem from "../components/BoardColumnItem.vue";
import { useBoardStore } from "@/stores/board";
import type { Socket } from "socket.io-client";
import { inject, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Note } from "@/models/Note";

const route = useRoute();
const router = useRouter();

const socket = inject('socket') as Socket;
socket.on("connect", () => {
  route.params.id ? socket.emit("get_board", route.params.id) : socket.emit("create_board")
})
const boardStore = useBoardStore();


socket.on("board_found", (res) => {
  console.log("Board found!", res)
  boardStore.$patch({ board: res });
})

socket.on("note_update", (note: Note, columnId: string) => {
  console.log(note, columnId);
  boardStore.addNoteAndSort(note, columnId)
})

socket.on("board_created", (id: string) => {
  router.push({ name: "board", params: { id: id } });
})

watch(
  () => route.params.id,
  async newId => {
    socket.emit("get_board", newId)
  }
)


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
