import type { Board } from "@/models/Board";
import type { Note } from "@/models/Note";
import { sortByVotes } from "@/utils/sort";
import { defineStore } from "pinia";


interface BoardState {
  board: Board | null;
}

export const useBoardStore = defineStore({
  id: "board",

  state: (): BoardState => ({
    board: null
  }),
  getters: {
    getColumnById: (state) => { return (columnId: string) => state.board?.columns.find((column) => column.id === columnId) }
  },
  actions: {
    addNoteAndSort(note: Note, columnId: string) {
      const columnNotes = this.getColumnById(columnId)?.notes;
      if (columnNotes) {
        columnNotes.unshift(note);
        sortByVotes(columnNotes);
      }
    }
  }
});
