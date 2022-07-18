import { defineStore } from "pinia";

let note_id_counter = 0;
const MOCK_COLUMNS_STATE: ColumnState = {
  items: {
    1: {
      title: "What went well",
      notes: [],
    },
    2: {
      title: "Column 2",
      notes: [],
    },
    3: {
      title: "Column 3",
      notes: [],
    },
    4: {
      title: "Column 4",
      notes: [],
    },
    5: {
      title: "Column 5",
      notes: [],
    },
  },
};

export interface Note {
  id: number;
  text: string;
  votes: number;
}

export interface Column {
  title: string;
  notes: Note[];
}

interface ColumnState {
  items: Record<string, Column>;
}

export const useColumnStore = defineStore({
  id: "columns",

  state: (): ColumnState => ({
    items: MOCK_COLUMNS_STATE.items,
  }),
  getters: {
    getColumnById: (state) => {
      return (columnId: number) => state.items[columnId];
    },
  },
  actions: {
    changeColumnTitle(id: number, newTitle: string) {
      this.items[id].title = newTitle;
    },

    addNote(id: number, text: string) {
      this.items[id].notes.push({
        text,
        id: note_id_counter,
        votes: 0,
      });
      note_id_counter++;
    },
  },
});
