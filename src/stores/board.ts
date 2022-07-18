import { defineStore } from "pinia";

interface BoardState {
  id: string;
  items: number[];
}

export const useBoardStore = defineStore({
  id: "board",

  state: (): BoardState => ({
    id: "board",
    items: [1, 2, 3],
  }),
});
