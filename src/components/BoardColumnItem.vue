<template>
  <div>
    <input class="column__title" v-model.lazy="column.title" />
    <div class="column__additem">
      <input
        type="text"
        class="additem__input"
        placeholder="Write something and press enter"
        v-model="newItemValue"
        @keyup.enter="addItem"
      />
      <button v-if="newItemValue" class="additem__button" @click="addItem">
        +
      </button>
    </div>
    <div class="column__item">
      <NoteItem
        v-for="note of column.notes"
        :key="note.id"
        :note="note"
      ></NoteItem>
    </div>
  </div>
</template>
<script lang="ts"></script>

<script lang="ts" setup>
import { ref } from "vue";
import NoteItem from "./NoteItem.vue";
import { useColumnStore, type Column } from "@/stores/column";

interface ColumnProps {
  columnId: number;
}

const props = defineProps<ColumnProps>();

const columnStore = useColumnStore();

const column: Column = columnStore.getColumnById(props.columnId);

const newItemValue = ref("");

const addItem = () => {
  if (newItemValue.value.length) {
    columnStore.addNote(props.columnId, newItemValue.value);
    newItemValue.value = "";
  }
};
</script>

<style>
.column__item {
  border-radius: 25px;
  padding: 20px 0px;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 15px;
}
.column__title {
  all: unset;
}
.column__additem {
  height: 54px;
  position: relative;
  padding: 0 54px 0 16px;
  border-radius: 10px;
  background-color: #e6efee;
}
.additem__input {
  all: unset;
  line-height: 54px;
  width: 100%;
}
.additem__button {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: #99ddc8;
  border-radius: 5px;
  color: white;
  font-weight: 700;
}
</style>
