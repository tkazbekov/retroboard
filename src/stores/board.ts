import type { Board } from "@/models/Board";
import type { Column } from "@/models/Column";
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
    getColumnById: (state) => { return (columnId: string) => state.board?.columns.find((column: Column) => column.id === columnId) }
  },
  actions: {
    addNoteAndSort(note: Note, columnId: string) {
      const columnNotes = this.getColumnById(columnId)?.notes;
      if (columnNotes) {
        columnNotes.unshift(note);
        sortByVotes(columnNotes);
      }
    },

    setNoteVotes(note: Note) {
      const votedNoteColumn = this.getColumnById(note.columnId);
      const votedNote = votedNoteColumn?.notes.find(item => item.id === note.id);
      votedNote ? votedNote.votes = note.votes : console.error(`Note[id=${note.id}] not found for voting!`);
      if (votedNoteColumn) {
        sortByVotes(votedNoteColumn.notes);
      }
    }
  }
});
