<template>
  <div class="note">
    <p class="note__text">{{ note.text }}</p>
    <button class="note__vote" @click="vote">{{ note.votes }}</button>
  </div>
</template>

<script setup lang="ts">
import type { Note } from "@/models/Note";

interface NoteProps {
  note: Note;
}

interface NoteEmits {
  (event: "vote", value: Note) : void
}

const props = defineProps<NoteProps>();
const emits = defineEmits<NoteEmits>();

const vote = () => {
  emits("vote", props.note)
}
</script>

<style lang="scss">
.note {
  background-color: #e6efee;
  min-height: 75px;
  border-radius: 10px;
  padding-bottom: 48px;
  position: relative;
}

.note__vote {
  position: absolute;
  left: 12px;
  bottom: 12px;
  border-radius: 3px;
  border: none;
  background-color: #99ddc8;
  height: 24px;
  width: 24px;
  line-height: 24px;
  color: white;
}

.note__text {
  padding: 12px 12px 0;
}
</style>
